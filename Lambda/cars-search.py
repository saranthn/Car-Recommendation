import boto3
import json
import requests
from requests_aws4auth import AWS4Auth
from elasticsearch import Elasticsearch, RequestsHttpConnection
import sys

region = 'us-east-1'
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)
host = 'search-cars-3-pnxgcfvymfnk4gvnmpcyrubymu.us-east-1.es.amazonaws.com'
es = Elasticsearch(
    hosts = [{'host': host, 'port': 443}],
    http_auth = awsauth,
    use_ssl = True,
    verify_certs = True,
    connection_class = RequestsHttpConnection
)

# Lambda execution starts here
def lambda_handler(event, context):
    searchq = event['queryStringParameters']
    print("Searchq: ", searchq)
    search_list = []
    if 'make' in searchq:
      search_list.append({
          "match": {
            "Make": searchq['make']
          }
        })
    if 'model' in searchq:
      search_list.append({
          "match": {
            "Model": searchq["model"]
          }
        })
    if 'price' in searchq:
      search_list.append({
        "range": {
          "MSRP": {
            "gte": int(searchq["price"].split('-')[0]),
            "lte": int(searchq["price"].split('-')[1])
          }
        }
      })
    if 'transmission' in searchq:
      search_list.append({
          "match": {
            "Transmission Type": searchq["transmission"]
          }
        })
    
    print("Searchlist: ", search_list)
    matches = []
    matches.append(es.search({"size": 100, "query": {"bool": {"must": search_list}}}))
    
    results = []
    full_results = []
    for match in matches:
        if 'hits' in match:
            for hit in match['hits']['hits']:
                full_results.append(hit['_source'])
                results.append(hit['_source']['carID'])
    
    print("Full results: ", full_results)
    print("Number of results: ", len(full_results))
    
    client = boto3.resource('dynamodb')
    table = client.Table('cars-table-unique')
    
    reslist = []
    for result in results:
        response = table.get_item(Key={'carID': result})['Item']
        resdict = {
          "carid": response["carID"],
          "carurl": "https://carphotos-1.s3.amazonaws.com/"+response["carID"]+".jpg",
          "mpg": response["city mpg"],
          "driven_wheels": response["Driven_Wheels"],
          "engine_cylinders": response["Engine Cylinders"],
          "fuel_type": response["Engine Fuel Type"],
          "engine_hp": response["Engine HP"],
          "highway_mpg": response["highway MPG"],
          "make": response["Make"],
          "model": response["Model"],
          "market_category": response["Market Category"],
          "msrp": response["MSRP"],
          "doors": response["Number of Doors"],
          "popularity": response["Popularity"],
          "transmission_type": response["Transmission Type"],
          "vehicle_size": response["Vehicle Size"],
          "vehicle_style": response["Vehicle Style"]
        }
        reslist.append(resdict)
    
    return {
            'statusCode': 200,
            'headers': {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":True,"Content-Type":"application/json"},
            'body': json.dumps(reslist)
        }

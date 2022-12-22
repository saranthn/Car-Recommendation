import boto3
import json
import requests
from requests_aws4auth import AWS4Auth
from elasticsearch import Elasticsearch, RequestsHttpConnection
import sys
import csv

filename = './data-with-id.csv'
tableName = 'cars-table-unique'

region = 'us-east-1'
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)
host = 'search-cars-3-pnxgcfvymfnk4gvnmpcyrubymu.us-east-1.es.amazonaws.com'
es_index = 'cars-3'
es = Elasticsearch(
    hosts=[{"host": host, "port": 443}],
    http_auth = awsauth,
    use_ssl = True,
    verify_certs = True,
    connection_class = RequestsHttpConnection
)


def write_to_es(rows, es, es_index):
    for i, row in enumerate(rows):
        esObject = json.dumps({
            "carID": row['carID'],
            "Make": row['Make'],
            "Model": row['Model'],
            "MSRP": int(row['MSRP']),
            "Vehicle Style": row['Vehicle Style'],
            "Transmission Type": row['Transmission Type']
        })
        es.index(index=es_index, doc_type="_doc", id=row['carID'], body=esObject)


def write_to_dynamo(rows):
    table = dynamodb.Table(tableName)
    with table.batch_writer() as batch:
        for row in rows:
            batch.put_item(
                Item={
                    'carID': row['carID'],
                    'Make': row['Make'],
                    'Model': row['Model'],
                    'Engine Fuel Type': row['Engine Fuel Type'],
                    'Engine HP': row['Engine HP'],
                    'Engine Cylinders': row['Engine Cylinders'],
                    'Transmission Type': row['Transmission Type'],
                    'Driven_Wheels': row['Driven_Wheels'],
                    'Number of Doors': row['Number of Doors'],
                    'Market Category': row['Market Category'],
                    'Vehicle Size': row['Vehicle Size'],
                    'Vehicle Style': row['Vehicle Style'],
                    'highway MPG': row['highway MPG'],
                    'city mpg': row['city mpg'],
                    'Popularity': row['Popularity'],
                    'MSRP': row['MSRP']
            })

# Lambda execution starts here
def lambda_handler(event, context):
    csvfile = open(filename)
    write_to_es(csv.DictReader(csvfile), es, es_index)
    write_to_dynamo(csv.DictReader(csvfile))
    print("Done")
    return {
        "statusCode": 200,
        "isBase64Encoded": False
    }
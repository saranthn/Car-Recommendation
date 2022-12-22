import boto3
import json
import requests
from requests_aws4auth import AWS4Auth
from elasticsearch import Elasticsearch, RequestsHttpConnection
import sys
import ast
from boto3.dynamodb.conditions import Key

region = 'us-east-1'
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

# Lambda execution starts here
def lambda_handler(event, context):
    print("Event: ", event)
    carid = event['multiValueQueryStringParameters']['carID'][0]
    
    client = boto3.resource('dynamodb')
    table = client.Table('cars-table-unique')
    
    like_state = False
    likestable = client.Table('likes-db')
    userid = event['requestContext']['authorizer']['claims']['cognito:username']
    likedcars = likestable.query(KeyConditionExpression=Key('userID').eq(userid))
    likedcars = [i['carID'] for i in likedcars['Items']]
    if carid in likedcars:
      like_state = True
    
    response = table.get_item(Key={'carID': carid})['Item']
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
      "vehicle_style": response["Vehicle Style"],
      "like_state": str(like_state)
    }
    
    return {
            'statusCode': 200,
            'headers': {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":True,"Content-Type":"application/json"},
            'body': json.dumps(resdict)
        }
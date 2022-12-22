import boto3
import json
import requests
from requests_aws4auth import AWS4Auth
import sys
import csv

import boto3

tableName = 'cars-table-unique'
dynamodb = boto3.resource('dynamodb')

region = 'us-east-1'
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

def get_popular():
    table = dynamodb.Table(tableName)
    
    # Use the Scan operation to get all items in the table
    response = table.scan()
    
    # Get the items from the response
    items = response['Items']
    
    # Sort the items by popularity in descending order
    items.sort(key=lambda x: x['Popularity'], reverse=True)
    
    # Get the top 10 items
    top_10_cars = items[:1000]
    print(top_10_cars)
    res_list = []
    make_list = []
    for response in top_10_cars:
        if response["Make"] in make_list or int(response["MSRP"]) < 20000:
            continue
        else:
            make_list.append(response["Make"])
        if len(make_list)>6:
            break
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
        res_list.append(resdict)
        
    return res_list


# Lambda execution starts here
def lambda_handler(event, context):
    res_list = get_popular()
    return {
        'statusCode': 200,
        'headers': {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":True,"Content-Type":"application/json"},
        'body': json.dumps(res_list)
    }
    print("Done")
import json
import boto3
from boto3.dynamodb.conditions import Key

def lambda_handler(event, context):
    client = boto3.resource('dynamodb')
    table = client.Table('likes-db')
    userid = event['requestContext']['authorizer']['claims']['cognito:username']
    results = table.query(KeyConditionExpression=Key('userID').eq(userid))
    results = [i['carID'] for i in results['Items']]
    
    table2 = client.Table('cars-table-unique')
    
    reslist = []
    for result in results:
        response = table2.get_item(Key={'carID': result})['Item']
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

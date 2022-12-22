import json
import boto3
import ast
from boto3.dynamodb.conditions import Key
import random
import numpy as np
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

def lambda_handler(event, context):
    
    client = boto3.resource('dynamodb')
    likestable = client.Table('likes-db')
    carstable = client.Table('cars-table-unique')
    userid = event['requestContext']['authorizer']['claims']['cognito:username']

    likedcars = likestable.query(KeyConditionExpression=Key('userID').eq(userid))
    likedcars = [i['carID'] for i in likedcars['Items']]
    print("likedcars: ", likedcars)
    s = set()
    for car in likedcars:
        response = carstable.get_item(Key={'carID': car})['Item']['knn']
        response = ast.literal_eval(response)
        for c in response:
            s.add(c)
    
    reslist = []
    
    if len(s) == 0:
        return {
            'statusCode': 200,
            'headers': {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":True,"Content-Type":"application/json"},
            'body': json.dumps(reslist)
        }
    
    res_cars = random.sample(list(s),4)
    for result in res_cars:
        response = carstable.get_item(Key={'carID': result})['Item']
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
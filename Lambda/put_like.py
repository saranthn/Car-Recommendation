import json
import boto3
from boto3.dynamodb.conditions import Key

def lambda_handler(event, context):
    userid = event['requestContext']['authorizer']['claims']['cognito:username']
    carid = event['queryStringParameters']['carID']
    
    client = boto3.client('dynamodb')
    likes_client = boto3.resource('dynamodb')
    table = likes_client.Table('likes-db')
    existing_carids = table.query(KeyConditionExpression=Key('userID').eq(userid))
    existing_carids = [i['carID'] for i in existing_carids['Items']]
    
    if carid in existing_carids:
        table.delete_item(Key={'userID': userid, 'carID': carid})
        print("Item deleted")
    else:
        item = {'userID': {'S': userid}, 'carID': {'S': carid}}
        client.put_item(TableName='likes-db', Item=item)
    
    return {
        'statusCode': 200,
        'headers': {"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":True,"Content-Type":"application/json"},
        'body': json.dumps('Hello from Lambda!')
    }

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

def most_common(lst):
    return max(set(lst), key=lst.count)
# {'Market Category': {'S': ''}, 'city mpg': {'S': '14'}, 'Engine HP': {'S': '190.0'}, 'Engine Fuel Type': {'S': 'regular unleaded'}, 'Driven_Wheels': {'S': 'rear wheel drive'}, 'Model': {'S': 'Safari'}, 'Popularity': {'S': '549'}, 'Number of Doors': {'S': '3.0'}, 'highway MPG': {'S': '19'}, 'Vehicle Style': {'S': 'Passenger Minivan'}, 'MSRP': {'S': '23690'}, 'carID': {'S': 'C13072'}, 'Engine Cylinders': {'S': '6.0'}, 'Make': {'S': 'GMC'}, 'Vehicle Size': {'S': 'Large'}, 'Transmission Type': {'S': 'AUTOMATIC'}}

def dist(point, data):
    # Euclidean distance between points a & data
    cat = ['Market Category','Driven_Wheels','Model','Number of Doors','Vehicle Style','Make','Vehicle Size', 'Transmission Type']
    nos = ['highway MPG','Engine HP','Number of Doors']
    res = []
    
    for i in data:
        s = 0
        for j in i:
            if j in cat:
                s += int(i[j]['S'] == point[j]['S'])
            elif j in nos:
                try:
                    s += (1/(1+abs(float(i[j]['S']) - float(point[j]['S']))))
                except:
                    continue
        res.append(s)
    return res

class KNeighborsClassifier:
    def __init__(self, k=5, dist_metric=dist):
        self.k = k
        self.dist_metric = dist_metric
    def fit(self, X_train, y_train):
        self.X_train = X_train
        self.y_train = y_train
    def predict(self, X_test):
        neighbors = []
        for i,x in enumerate(X_test):
            distances = self.dist_metric(x, self.X_train)
            y_sorted = [y for _, y in sorted(zip(distances, self.y_train), reverse=True)]
            y_sorted.remove(self.y_train[i])
            neighbors.append(y_sorted[:self.k])
        return neighbors

client = boto3.client('dynamodb')

def lambda_handler(event, context):
    # TODO implement
    data = client.scan(TableName='cars-table-unique')
    d = []
    cid = []
    for i in data['Items']:
        d.append(i)
        cid.append(i['carID']['S'])
    knn = KNeighborsClassifier()
    knn.fit(d, cid)
    y = knn.predict(d)
    print(y)
    print('before',cid[0],d[0],y[0])
    for i in range(len(y)):
        item = d[i]
        item['knn'] = {'S': str(y[i])}
        client.put_item(TableName='cars-table-unique',Item=item)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
# {'Market Category': {'S': ''}, 'city mpg': {'S': '14'}, 'Engine HP': {'S': '190.0'}, 'Engine Fuel Type': {'S': 'regular unleaded'}, 'Driven_Wheels': {'S': 'rear wheel drive'}, 'Model': {'S': 'Safari'}, 'Popularity': {'S': '549'}, 'Number of Doors': {'S': '3.0'}, 'highway MPG': {'S': '19'}, 'Vehicle Style': {'S': 'Passenger Minivan'}, 'MSRP': {'S': '23690'}, 'carID': {'S': 'C13072'}, 'Engine Cylinders': {'S': '6.0'}, 'Make': {'S': 'GMC'}, 'Vehicle Size': {'S': 'Large'}, 'Transmission Type': {'S': 'AUTOMATIC'}}
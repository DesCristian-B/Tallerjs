import requests 
import json

url = "https://dog.ceo/api/breeds/image/random"
response = requests.get(url)
data = json.loads(response.content)
print(data)
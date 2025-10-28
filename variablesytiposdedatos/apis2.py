import requests
import json
url = "https://jsonplaceholder.typicode.com/users"
respuesta = requests.get(url)
if respuesta.status_code == 200:
    users = respuesta.json()
    for user in users:
        print(user["name"])
else:
    print("El servidor no respondió", respuesta.status_code)
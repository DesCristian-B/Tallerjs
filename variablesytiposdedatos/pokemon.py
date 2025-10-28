import requests
import json

nombre_pokemon1 = input("Escribe el nombre del primer Pokémon: ").lower()
nombre_pokemon2 = input("Escribe el nombre del segundo Pokémon: ").lower()

url1 = "https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon1
url2 = "https://pokeapi.co/api/v2/pokemon/" + nombre_pokemon2

respuesta1 = requests.get(url1)
respuesta2 = requests.get(url2)

if respuesta1.status_code == 200 and respuesta2.status_code == 200:
    datos1 = respuesta1.json()
    datos2 = respuesta2.json()

    print(f"\n {datos1['name'].lower()} ")
    print("Tipos:")
    for tipo in datos1["types"]:
        print("-", tipo["type"]["name"].lower())

    print("Habilidades:")
    for habilidad in datos1["abilities"]:
        print("-", habilidad["ability"]["name"].lower())

    print("Estadísticas:")
    for stat in datos1["stats"]:
        print(f"- {stat['stat']['name'].lower()}: {stat['base_stat']}")

    print(f"\n {datos2['name'].lower()} ")
    print("Tipos:")
    for tipo in datos2["types"]:
        print("-", tipo["type"]["name"].lower())

    print("Habilidades:")
    for habilidad in datos2["abilities"]:
        print("-", habilidad["ability"]["name"].lower())

    print("Estadísticas:")
    for stat in datos2["stats"]:
        print(f"- {stat['stat']['name'].lower()}: {stat['base_stat']}")


import requests
import json

pokemon1 = input("Escribe el nombre del primer Pokémon: ").lower()
pokemon2 = input("Escribe el nombre del segundo Pokémon: ").lower()


url1 = f"https://pokeapi.co/api/v2/pokemon/{pokemon1}"
url2 = f"https://pokeapi.co/api/v2/pokemon/{pokemon2}"

respuesta1 = requests.get(url1)
respuesta2 = requests.get(url2)


if respuesta1.status_code != 200 or respuesta2.status_code != 200:
    print("Uno de los Pokémon no existe, revisa los nombres.")
else:
    datos1 = respuesta1.json()
    datos2 = respuesta2.json()


    hp1 = datos1["stats"][0]["base_stat"]
    ataque1 = datos1["stats"][1]["base_stat"]
    defensa1 = datos1["stats"][2]["base_stat"]

    hp2 = datos2["stats"][0]["base_stat"]
    ataque2 = datos2["stats"][1]["base_stat"]
    defensa2 = datos2["stats"][2]["base_stat"]


    print("\n Estadísticas ")
    print(f"{pokemon1.lower()}: HP={hp1}, Ataque={ataque1}, Defensa={defensa1}")
    print(f"{pokemon2.lower()}: HP={hp2}, Ataque={ataque2}, Defensa={defensa2}")

    # 4. Comparamos los ataques
    print("\n Resultado de la batalla ")
    if ataque1 > ataque2:
        print(f" {pokemon1.lower()} gana la batalla!")
    elif ataque2 > ataque1:
        print(f" {pokemon2.lower()} gana la batalla!")
    else:
        print(" Es un empate, ambos tienen el mismo ataque.")

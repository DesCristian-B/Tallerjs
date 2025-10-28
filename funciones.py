##
# ! Funciones --> Bloque de código destinado a resolver
# ! algo en específico

# ? Función sin parametro
def saludar():
    print("Hola a todxs")

saludar()

# ? Función con parametros
def saludarConParametro(nombre):
    return f"Hola, {nombre}"

saludo = saludarConParametro("Ana")
print(saludo)
saludo = saludarConParametro("Nico")
print(saludo)
saludo = saludarConParametro("Victoria")
print(saludo)

numeros = [1, 2, 3, 4, 5, 6.1, 7, 8, 11.4]
print(numeros[0] + numeros[1] + numeros[2])
print(sum(numeros))
print(max(numeros))
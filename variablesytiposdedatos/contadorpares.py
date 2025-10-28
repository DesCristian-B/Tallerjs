pares = 0
impares = 0
for i in range(5):
    numero = int(input("Escribe un número: "))
    
    if numero % 2 == 0:
        pares = pares + 1
    else:
        impares = impares + 1
print("Cantidad de números pares:", pares)
print("Cantidad de números impares:", impares)

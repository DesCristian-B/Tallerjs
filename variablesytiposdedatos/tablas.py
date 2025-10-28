numero = int(input("Escribe un número para ver su tabla de multiplicar: "))
for i in range(1, 11):
    resultado = numero * i
    print(numero, "x", i, "=", resultado)

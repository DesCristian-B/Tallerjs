numero_secreto = 5
intento = int(input("Adivina el número (entre 1 y 10): "))
while intento != numero_secreto:
    if intento < numero_secreto:
        print("El número es mayor.")
    else:
        print("El número es menor.")
    intento = int(input("Intenta de nuevo: "))
print("¡Felicidades! Adivinaste el número.")

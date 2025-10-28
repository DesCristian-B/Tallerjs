nota1 = float(input("Escribe la primera nota: "))
nota2 = float(input("Escribe la segunda nota: "))
nota3 = float(input("Escribe la tercera nota: "))
promedio = (nota1 + nota2 + nota3) / 3
print("El promedio es:", promedio)
if promedio >= 60:
    print("Aprobado")
else:
    print("Reprobado")

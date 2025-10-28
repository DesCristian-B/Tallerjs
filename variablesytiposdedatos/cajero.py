saldo = 100
print("Bienvenido al cajero automático")
print("Tu saldo actual es de $", saldo)
accion = input("¿Quieres 'retirar' o 'depositar'?: ").lower()
if accion == "retirar":
    monto = float(input("¿Cuánto deseas retirar?: "))
    if monto <= saldo:
        saldo = saldo - monto
        print("Retiro exitoso.")
    else:
        print("No tienes suficiente saldo.")
elif accion == "depositar":
    monto = float(input("¿Cuánto deseas depositar?: "))
    saldo = saldo + monto
    print("Depósito exitoso.")
else:
    print("Opción no válida.")
print("Tu saldo final es de $", saldo)

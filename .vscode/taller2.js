const prompt = require("prompt-sync")();

// Punto 1
let nombre;
nombre = "Cristian";
let edad;
edad = 37; 
let esEstudiante;
esEstudiante = true;
let sinValor;
let valorNulo;
valorNulo = null;

console.log(sinValor); // undefined
console.log(valorNulo); // null

// Punto 2
let anio = Number(prompt("¿Cuál es su año de nacimiento?: "));
edad = 2025 - anio;
console.log("Su edad es: " + edad);

let num1 = Number(prompt("Hola, dime un número para hacer una suma: "));
let num2 = Number(prompt("Dime el segundo número: "));
let resultado = num1 + num2;
console.log("El resultado de la suma es: " + resultado);

// Punto 3
let edad2 = Number(prompt("Hola, ¿cuál es su edad?: "));
if (edad2 >= 18) {
console.log("¡Puedes entrar!");
} else {
console.log("No puedes entrar");
}

let num3 = Number(prompt("Bienvenido, ingrese un número: "));
if (num3 > 0) {
console.log("El número es positivo");
} else if (num3 < 0) {
console.log("El número es negativo");
} else {
console.log("El número es cero");
}

// Ejercicio 4
let numero4 = Number(prompt("Bienvenido, vamos a contar de 1 hasta donde tú digas: "));
let contador = 1;
while (contador <= numero4) {
console.log(contador);
contador++;
}

let intento = prompt("Ingrese su contraseña: ");
while (intento !== "1234") {
intento = prompt("Contraseña incorrecta, intente de nuevo: ");
}
console.log("¡Contraseña correcta!");

// Ejercicio 5
for (let i = 1; i <= 10; i++) {
console.log(i);
}

let numero = Number(prompt("Ingresa un número para ver su tabla de multiplicar: "));
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

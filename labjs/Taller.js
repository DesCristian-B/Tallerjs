// Ejercicio 1
function calcularPropina(total, porcentaje) {
  let propina = total * (porcentaje / 100);
return total + propina;
};

console.log(calcularPropina(100000, 10));
console.log(calcularPropina(50000, 15));

// Ejercicio 2
function validarContraseña(contraseña) {
return contraseña.length >= 8 && /[0-9]/.test(contraseña) && /[A-Z]/.test(contraseña);
};

console.log(validarContraseña("Hola1234"));
console.log(validarContraseña("abc"));

// Ejercicio 3
function buscarProducto(nombre, inventario) {
for (let producto of inventario) {
    if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
return producto;
    };
};
return null;
};

const inventario = [
{ nombre: "Camisa", precio: 20000 },
{ nombre: "Zapatos", precio: 50000 },
{ nombre: "Pantalón", precio: 40000 }
];

console.log(buscarProducto("Zapatos", inventario));
console.log(buscarProducto("Gorra", inventario));

// Ejercicio 4
function calcularPromedio(notas) {
let suma = 0;
for (let nota of notas) {
    suma += nota;
};
return (suma / notas.length).toFixed(2);
};

console.log(calcularPromedio([4.5, 3.8, 4.0]));
console.log(calcularPromedio([5, 5, 4.8, 4.9]));

// Ejercicio 5
function filtrarUsuarios(usuarios, edadMinima) {
let filtrados = [];
for (let usuario of usuarios) {
    if (usuario.edad >= edadMinima) {
filtrados.push(usuario);
    };
};
return filtrados;
};

const usuarios = [
{ nombre: "Ana", edad: 25 },
{ nombre: "Luis", edad: 17 },
{ nombre: "Carlos", edad: 30 }
];

console.log(filtrarUsuarios(usuarios, 18));
console.log(filtrarUsuarios(usuarios, 21));

// Ejercicio 6
function contarPalabras(texto) {
let palabras = texto.trim().split(" ");
return palabras.length;
};

console.log(contarPalabras("Hola mundo"));
console.log(contarPalabras("Esto es una prueba de texto simple"));

// Ejercicio 7
function retirarDinero(saldo, monto) {
if (monto > saldo) {
    return "Fondos insuficientes";
} else {
    return saldo - monto;
};
};

console.log(retirarDinero(100000, 50000));
console.log(retirarDinero(20000, 50000));

// Ejercicio 8
function convertirMoneda(monto, monedaDestino) {
if (monedaDestino === "USD") {
    return monto / 4000;
} else if (monedaDestino === "EUR") {
    return monto / 4400;
} else {
    return "Moneda no válida";
};
};

console.log(convertirMoneda(800000, "USD"));
console.log(convertirMoneda(1000000, "EUR"));
console.log(convertirMoneda(50000, "YEN"));

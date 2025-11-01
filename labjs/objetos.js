const prompt = require("prompt-sync")();

// Ejercicio 1: Libro

function Libro(titulo, autor) {
this.titulo = titulo;
this.autor = autor;
this.prestado = false;

this.prestar = function() {
    if (!this.prestado) {
    this.prestado = true;
    return `"${this.titulo}" ha sido prestado.`;
    } else {
    return `Error: "${this.titulo}" ya está prestado.`;
    }
};
};

let libro1 = new Libro("La historia del tiempo ", "Stephen Hawking");

console.log(libro1.prestar());
console.log(libro1.prestar());

// Ejercicio 2: Lista de Compras

function ListaCompras() {
this.productos = [];
this.agregar = function(producto) {
    this.productos.push(producto);
};
this.mostrar = function() {
for (let i = 0; i < this.productos.length; i++) {
console.log((i + 1) + ". " + this.productos[i]);
};
};
};

let lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Pan");
lista.agregar("Leche");
lista.mostrar();

// Ejercicio 3: Reproductor de Música

function Reproductor() {
this.estado = "detenido";
this.play = function() {
    if (this.estado === "detenido" || this.estado === "pausado") {
this.estado = "reproduciendo";
console.log("Reproduciendo música...");
    } else {
    console.log("Ya se está reproduciendo música.");
    };
};
this.pausar = function() {
    if (this.estado === "reproduciendo") {
    this.estado = "pausado";
    console.log("Música pausada.");
    } else {
    console.log("No hay música reproduciéndose.");
    };
};
this.detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
};
};

let miReproductor = new Reproductor();
miReproductor.play();
miReproductor.pausar();
miReproductor.detener();

// Ejercicio 4: Carrito de Compras con Descuentos

function Carrito() {
this.productos = [];
this.total = 0;
this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre: nombre, precio: precio });
    this.total += precio;
};
this.calcularDescuento = function() {
    if (this.total > 100) {
      console.log("Total con 10% de descuento: $" + (this.total * 0.9).toFixed(2));
    } else if (this.total > 50) {
      console.log("Total con 5% de descuento: $" + (this.total * 0.95).toFixed(2));
    } else {
    console.log("Total sin descuento: $" + this.total.toFixed(2));
    }
};
};

let carrito = new Carrito();
carrito.agregarProducto("Camisa", 30);
carrito.agregarProducto("Pantalón", 40);
carrito.agregarProducto("Zapatos", 50);
carrito.calcularDescuento();

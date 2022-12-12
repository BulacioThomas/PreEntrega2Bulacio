// CASO ECOMMERCE

// * TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
// * LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
// * EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

// 1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
//     - id
//     - producto
//     - precio
//     - fechaVencimiento (en el caso de que tenga una)
//     - descripción
//     - categoría (si tiene una)
//     - oferta (booleano)

// Quiero que algunos de los elementos tengan un true en oferta.

// 2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

// 3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
// Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
//     - [...array] ---> spread operator
//     - array.slice() ---> copia segura en otra variable
//     - [].concat(array) ---> copia segura en otra variable

// 4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

// 5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert().


const productos = [
	{
		id: 1,
		producto: "Platano",
		precio: 100,
		descripción: "Fruta tropical",
		categoría: "Frutas",
		oferta: true,
	},
	{
		id: 2,
		producto: "Uvas",
		precio: 80,
		descripción: "Fruto carnoso pluriseminado",
		categoría: "Frutas",
		oferta: false,
	},
	{
		id: 3,
		producto: "Piña",
		precio: 120,
		descripción: "Fruta tropical perenne",
		categoría: "Frutas",
		oferta: false,
	},
	{
		id: 4,
		producto: "Fresas",
		precio: 110,
		descripción: "fruto de color rojo",
		categoría: "Frutas",
		oferta: true,
	},
	{
		id: 5,
		producto: "Sandia",
		precio: 189,
		descripción: " fruta veraniega",
		categoría: "Frutas",
		oferta: true,
	},
	{
		id: 6,
		producto: "Manzana",
		precio: 80,
		descripción: "Fruto del manzano",
		categoría: "Frutas",
		oferta: false,
	},
	{
		id: 7,
		producto: "Naranja",
		precio: 200,
		descripción: "Fruto del naranjo dulce",
		categoría: "Frutas",
		oferta: false,
	},
	{
		id: 8,
		producto: "Brocoli",
		precio: 200,
		descripción: "Verdura perteneciente a la familia de las crucíferas",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 9,
		producto: "Zanahoria",
		precio: 160,
		descripción: "Perteneciente a la familia de las umbelíferas",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 10,
		producto: "Espinaca",
		precio: 210,
		descripción:
			"Perteneciente a la familia de las amarantáceas, subfamilia quenopodioideas",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 11,
		producto: "Papas",
		precio: 250,
		descripción:
			"Perteneciente a la familia de las solanáceas de plantas con flores",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 12,
		producto: "lechuga",
		precio: 100,
		descripción: "Planta en principios vitamínicos",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 13,
		producto: "Zapallo",
		precio: 235,
		descripción: "Fruto Cucurbita maxima",
		categoría: "Verduras",
		oferta: true,
	},
	{
		id: 14,
		producto: "Remolacha",
		precio: 80,
		descripción: "Ortaliza baja en grasas",
		categoría: "Verduras",
		oferta: false,
	},
	{
		id: 15,
		producto: "Cebolla",
		precio: 70,
		descripción: "Planta bienal de tallo subterráneo y reducido",
		categoría: "Verduras",
		oferta: false,
	},
];

let productosOrdenados = [];

// Punto 2:
function hacerDescuentos() {
	productos.map((producto) => {
		if (producto.oferta === true) {
			producto.precio = producto.precio * (15 / 100);
		}
	});
}
hacerDescuentos();

// Punto 3:
function ordenarArray() {
	function comparar(a, b) {
		if (a.producto < b.producto) {
			return -1;
		}
		if (a.producto > b.producto) {
			return 1;
		}
		return 0;
	}

	const nuevoArray = [...productos];
	const arrayOrdenado = nuevoArray.sort(comparar);

	productosOrdenados = arrayOrdenado;
}
ordenarArray();

// Punto 4:
function verOfertas() {
	const quiereVerOfertas = confirm("¿Te gustaría ver las ofertas?");

	if (quiereVerOfertas) {
		const ofertasFiltradas = productosOrdenados.filter(
			(producto) => producto.oferta
		);
		console.log("OFERTAS:");
		console.log(ofertasFiltradas);
	}
}
verOfertas();

// Punto 5:
function verProductos() {
	const producto = prompt("Busque el producto que quiera");
	const productoEncontrado = productosOrdenados.find(
		(product) => product.producto.toLowerCase() === producto.toLowerCase()
	);

	if (productoEncontrado) {
		alert(JSON.stringify(productoEncontrado));
	} else {
		alert("No existe ningún producto con ese nombre!");
	}
}
verProductos();

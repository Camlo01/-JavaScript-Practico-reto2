//Lógica de descuentos
console.group("Lógica de descuentos");

function calcularDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioFinal = (precio * porcentajeDescuento) / 100;
  return "El precio final del producto es de: $" + precioFinal;
  //   return "El producto con valor de " + precio + " Es de " + precioFinal;
}

//--------------------------------------------------------------
//---------------- Conectar JS con HTML ------------------------
//--------------------------------------------------------------

function buttonCalcularDescuento() {
  console.log("Se ejecuta buttonCalcularDescuento() que calcula el descuento del precio de un producto");
  const inputPrecio = document.getElementById("precio");
  const inputDescuento = document.getElementById("descuento");
  const precio = inputPrecio.value;
  const descuento = inputDescuento.value;
  const resultado = calcularDescuento(precio, descuento);
  const parrafoPantalla = document.getElementById("resultadoEnPantalla");
  parrafoPantalla.innerText = resultado;
}

console.groupEnd();

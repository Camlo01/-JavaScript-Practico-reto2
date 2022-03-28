//Lógica de descuentos
console.group("Lógica de descuentos");

function calcularDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioFinal = (precio * porcentajeDescuento) / 100;
  return "El precio final del producto es de: $" + precioFinal;
  //   return "El producto con valor de " + precio + " Es de " + precioFinal;
}

// array de cupones
let cupones = ["1", "cupon1", "cupon2", "cupon3"];

function verificarExistenciaCupon(cupon) {
  if (cupones.includes(cupon)) {
    return true;
  } else {
    return false;
  }
}

//--------------------------------------------------------------
//---------------- Conectar JS con HTML ------------------------
//--------------------------------------------------------------

function buttonCalcularDescuento() {
  console.log(
    "Se ejecuta buttonCalcularDescuento() que calcula el descuento del precio de un producto"
  );
  const inputPrecio = document.getElementById("precio");
  const inputDescuento = document.getElementById("descuento");
  const precio = inputPrecio.value;
  const descuento = inputDescuento.value;
  const resultado = calcularDescuento(precio, descuento);
  const parrafoPantalla = document.getElementById("resultadoEnPantalla");
  parrafoPantalla.innerText = resultado;
}

function buttonUsarCupon() {
  console.log("Se ejecuta botón que calcula el precio con el cupon ingresado");
  const inputCupon = document.getElementById("cupon");
  const inputDescuento = document.getElementById("descuento");
  const descuento = inputDescuento.value;

  const cupon = inputCupon.value;

  if (verificarExistenciaCupon(cupon)) {
    return buttonCalcularDescuento(descuento);
  } else {
    // return "El cupon ingresado no es valido";
    return alert("El cupon ingresado no es valido");
  }
}

console.groupEnd();

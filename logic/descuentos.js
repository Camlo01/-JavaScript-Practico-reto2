//Lógica de descuentos
console.group("Lógica de descuentos");

function calcularDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioFinal = (precio * porcentajeDescuento) / 100;
  return precioFinal;
  //   return "El producto con valor de " + precio + " Es de " + precioFinal;
}

// array de cupones
// Descuentos  15%   20%  30%  40%  50%
let cupones = ["UN0", "D0S", "TR3S", "CU4TRO", "cinco"];

function existeCupon(cupon) {
  if (cupones.includes(cupon)) {
    return true;
  } else {
    return false;
  }
}
// AQUÍ LOGICA DE DESCUENTO CORRESPONDIENTE
// // Switch case
function valorDeCupon(cupon) {
  switch (cupon) {
    case cupones[0]:
      return 15;
    case cupones[1]:
      return 20;
    case cupones[2]:
      return 30;
    case cupones[3]:
      return 40;
    case cupones[4]:
      return 50;
    default:
      console.log("El cupon ingresado no existe");
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

  //Se trae y se cambia el contenido de la etiqueta <p>
  const valorEnPantalla = document.getElementById("resultadoEnPantalla");
  valorEnPantalla.innerText =
    "El precio final del producto es de: $" + resultado;
}

function buttonUsarCupon() {
  const inputPrecio = document.getElementById("precio");
  const inputCupon = document.getElementById("cupon");
  const precio = inputPrecio.value;
  const cupon = inputCupon.value;

  const valorCupon = valorDeCupon(cupon);

  if (existeCupon(cupon)) {
    const descuentoConCupon = calcularDescuento(precio, valorCupon);
    //Se trae y se cambia el contenido de la etiqueta <p>
    // return alert("Recibiste " +valorCupon+"% de descuento por tu cupon, el precio total es de " +descuentoConCupon +"$");
    const valorEnPantalla = document.getElementById("resultadoEnPantalla");
    valorEnPantalla.innerText =
      "cupon de " +
      valorCupon +
      "%, el precio total es de " +
      descuentoConCupon +
      "$";
  } else {
    return alert("Cupon no existe");
  }
}

console.groupEnd();

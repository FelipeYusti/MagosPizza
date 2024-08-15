let notificacionesAcumuladas = 0;
const precioPizzaMargarita = 58000;
const precioPizza4quesos = 46000;
const precioPizzaChampinion = 36000;
const precioPizzaChicago = 68000;
let TotalPagar = 0;
let acumalarCantidaProductos = 0;
function calcularFacturaEspeciales() {
  let notiPedido = document.getElementById("NotficacionPedido");
  let btnPizzas = parseInt(document.getElementById("PizzaEsp").value);

  let cantidadPizzaMar = parseInt(document.getElementById("cantidadPizzaMar").value);
  let cantidadPizza4que = parseInt(document.getElementById("cantidadPizza4que").value);
  let cantidadPizzaChamp = parseInt(document.getElementById("cantidadPizzaChamp").value);
  let cantidadPizzaChi = parseInt(document.getElementById("cantidadPizzaChi").value);

  /*  if (btnPizzas == 1) {
    notificacionesAcumuladas = notificacionesAcumuladas + 1;
    notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  } */

  switch (btnPizzas) {
    case 1:
      notificacionesAcumuladas = notificacionesAcumuladas + 1;
      notiPedido.innerHTML = `${notificacionesAcumuladas}`;
      TotalPagar = cantidadPizzaMar * precioPizzaMargarita;
      break;
    case 2:
      notificacionesAcumuladas = notificacionesAcumuladas + 1;
      notiPedido.innerHTML = `${notificacionesAcumuladas}`;
      TotalPagar = cantidadPizza4que * precioPizza4quesos;
      break;
    case 3:
      notificacionesAcumuladas = notificacionesAcumuladas + 1;
      notiPedido.innerHTML = `${notificacionesAcumuladas}`;
      TotalPagar = cantidadPizzaChamp * precioPizzaChampinion;
      break;
    case 4:
      notificacionesAcumuladas = notificacionesAcumuladas + 1;
      notiPedido.innerHTML = `${notificacionesAcumuladas}`;
      TotalPagar = cantidadPizzaChi * precioPizzaChicago;
      break;
    default:
      break;
  }
}
function verFactura() {
  let TotalFactura = document.getElementById("TotalFactura");

  TotalFactura.innerHTML = `${TotalPagar}`;
}

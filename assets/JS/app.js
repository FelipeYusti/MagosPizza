let notificacionesAcumuladas = 0;
const precioPizzaMargarita = 58000;
const precioPizza4quesos = 46000;
const precioPizzaChampinion = 36000;
const precioPizzaChicago = 68000;
let TotalPagar = 0;
let acumalarCantidaProductos = 0;
let pedido = []
function calcularFacturaEspeciales() {
  let notiPedido = document.getElementById("NotficacionPedido");
  let btnPizzas = parseInt(document.getElementById("BtnAgregarPizza").value);

  /*  if (btnPizzas == 1) {
    notificacionesAcumuladas = notificacionesAcumuladas + 1;
    notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  } */
}
function verFactura() {
  let TotalFactura = document.getElementById("TotalFactura");

  TotalFactura.innerHTML = `${TotalPagar}`;
}

let BtnPizzaMargarita = document.getElementById("BtnPizzaMarg");
BtnPizzaMargarita.addEventListener("click", (e) => {
  alert("Margarita");
  let notiPedido = document.getElementById("NotficacionPedido");

  let cantidadPizzaMar = parseInt(document.getElementById("cantidadPizzaMar").value);
  notificacionesAcumuladas = notificacionesAcumuladas + 1;
  notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  TotalPagar = cantidadPizzaMar * precioPizzaMargarita;
  pedido.push({id: 1 , Tipo:"Margarita", cantidad: cantidadPizzaMar ,  precio:58000 , Producto : "Pizza"  });
});
//
let BtnPizza4quesos = document.getElementById("BtnPizza4quesos");
BtnPizza4quesos.addEventListener("click", (e) => {
  let notiPedido = document.getElementById("NotficacionPedido");
  let cantidadPizza4que = parseInt(document.getElementById("cantidadPizza4que").value);
  notificacionesAcumuladas = notificacionesAcumuladas + 1;
  notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  TotalPagar = cantidadPizza4que * precioPizza4quesos;
  pedido.push({id: 2 , Tipo:"Margarita", cantidad: cantidadPizzaMar ,  precio:46000 , Producto : "Pizza"  });
});
//////
let BtnPizzaChampiniones = document.getElementById("BtnPizzaChampi");
BtnPizzaChampiniones.addEventListener("click", (e) => {
  let notiPedido = document.getElementById("NotficacionPedido");
  let cantidadPizzaChamp = parseInt(document.getElementById("cantidadPizzaChamp").value);
  notificacionesAcumuladas = notificacionesAcumuladas + 1;
  notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  TotalPagar = cantidadPizzaChamp * precioPizzaChampinion;
  pedido.push({id: 3 , Tipo:"Margarita", cantidad: cantidadPizzaMar ,  precio:36000 , Producto : "Pizza"  });
});

let BtnPizzaChicago = document.getElementById("BtnPizzaChicago");
BtnPizzaChicago.addEventListener("click", (e) => {
  let notiPedido = document.getElementById("NotficacionPedido");
  let cantidadPizzaChi = parseInt(document.getElementById("cantidadPizzaChi").value);
  notificacionesAcumuladas = notificacionesAcumuladas + 1;
  notiPedido.innerHTML = `${notificacionesAcumuladas}`;
  TotalPagar = cantidadPizzaChi * precioPizzaChicago;
  pedido.push({id: 4 , Tipo:"Margarita", cantidad: cantidadPizzaMar ,  precio:68000 , Producto : "Pizza"  });
});

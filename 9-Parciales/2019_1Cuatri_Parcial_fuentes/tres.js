function mostrar()
{
	var precio;
	var porcentaje;
	var precioFinal;
	var descuento;
	var mensaje;

	precio=prompt("Ingrese el precio");
	precio=parseInt(precio);

	porcentaje=prompt("Ingrese el porcentaje de descuento");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;
	precioFinal=precio-descuento;

	mensaje="El precio final es "+precioFinal+".";

	document.getElementById('elPrecioFinal').value=mensaje;

}

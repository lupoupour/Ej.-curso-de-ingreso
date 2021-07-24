/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	var porcentaje;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	porcentaje=prompt("Ingrese el porcentaje de descuento que desea realizar");
	porcentaje=parseInt(porcentaje);
	//Siempre que esté trabajando con variables que van a ser números durante todo mi código,
	//DEBO parsearlo con parseInt, para evitar que se puedan ingresar textos. Entonces, si por prompt
	//traigo un número, debo parsearlo después. 

	descuento=importe*porcentaje/100;
	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value=resultado;
}

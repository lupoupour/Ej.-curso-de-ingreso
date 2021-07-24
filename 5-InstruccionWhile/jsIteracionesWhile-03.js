/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{

	var mensaje;
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		mensaje="¡La clave es incorrecta!"
		alert(mensaje);
	}

}

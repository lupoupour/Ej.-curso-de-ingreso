function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	var mensaje;

	mensaje="En este destino hace calor."

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace frío"
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
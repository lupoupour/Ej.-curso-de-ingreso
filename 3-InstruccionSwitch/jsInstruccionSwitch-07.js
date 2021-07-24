function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var mensaje;

	mensaje="Este destino se encuentra en el sur de Argentina."

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje="Este destino se encuentra en el norte de Argentina."
		break;
		case "Mar del plata":
			mensaje="Este destino se encuentra en el este de Argentina."
	}

	alert(mensaje);

}
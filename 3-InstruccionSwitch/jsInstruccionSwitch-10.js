function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value;
	var mensaje;

	switch(estacionIngresada)
	{
		case "Invierno":
		mensaje="No se viaja."
		switch(destinoIngresado)
		{
			case "Bariloche":
				mensaje="Se viaja."
			break;
		}
		break;

		case "Verano":
		mensaje="No se viaja."
		switch(destinoIngresado)
		{
			case "Cataratas":
			case "Mar del plata":
				mensaje="Se viaja."
			break;
		}
		break;

		case "Otoño":
		switch(destinoIngresado)
		{
			default:
				mensaje="Se viaja."
			break;
		}
		break;

		case "Primavera":
		mensaje="Se viaja."
		switch(destinoIngresado)
		{
			case "Bariloche":
				mensaje="No se viaja."
			break;
		}
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
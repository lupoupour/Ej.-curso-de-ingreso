function mostrar()
{
	var horaDelDia =txtIdHora.value;
	var mensaje;

	mensaje="No es de mañana."

	switch(horaDelDia)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje="Es de mañana."
		break;
	}

	alert(mensaje);

}
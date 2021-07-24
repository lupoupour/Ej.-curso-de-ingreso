function mostrar()
{
	
	var mesDelAño =txtIdMes.value;
	var mensaje;

	mensaje="Este mes tiene 31 días."

	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes tiene 28 días."
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 días."
		break;
	}


	alert(mensaje);
	
}
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	var mensaje;

	mensaje="Este mes tiene 30 o más días."
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene más de 29 días."
		break;
	}	

	alert(mensaje);
}
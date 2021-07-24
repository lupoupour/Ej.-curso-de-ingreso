function mostrar()
{
	//tomo el mes
	/* JULIO-AGOSTO --> "Abrigate que hace frío."
SEPTIEMBRE-MARZO --> "Ya pasamos el frío, ahora calor!"
ABRIL-JUNIO --> "Falta para el invierno."
*/

	var mesDelAño=txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Abril":
			//mensaje="Falta para el invierno."
		//break;
		case "Mayo":
			//mensaje="Falta para el invierno."
		//break;
		case "Junio":
			mensaje="Falta para el invierno."
		break;
		case "Julio":
			//mensaje="Abrigate que hace frío."
		//break;
		case "Agosto":
			mensaje="Abrigate que hace frío."
		break;
		/*case "Septiembre":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
		case "Octubre":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
		case "Noviembre":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
		case "Diciembre":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
				case "Enero":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
		case "Febrero":
			//mensaje="Ya pasamos el frío, ahora calor!"
		//break;
		case "Marzo":
			mensaje="Ya pasamos el frío, ahora calor!"
		break;*/
		default: //pongo un default con el msj que más casos tiene
			mensaje="Ya pasamos el frío, ahora calor!"
		break;

	}

	alert(mensaje);






}//FIN DE LA FUNCIÓN
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value;
	var precioBase;
	var ajuste;
	var precioFinal;

	precioBase=15000;

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
			{
				case "Bariloche":
					ajuste=20
				break;
				case "Cordoba":
				case "Cataratas":
					ajuste=-10
				break;
				case "Mar del plata":
					ajuste=-20
				break;
			}

		break;
		case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
				ajuste=-20
			break;
			case "Cordoba":
			case "Cataratas":
				ajuste=10
			break;
			case "Mar del plata":
				ajuste=20
			break;
		}

		break;
		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				ajuste=10
			break;
			case "Cordoba":
				ajuste=0
			break;
		}

	}

	precioFinal=precioBase+(precioBase*ajuste/100);

	alert("Para vacacionar en este destino en esa estación se necesitan $"+precioFinal);

}
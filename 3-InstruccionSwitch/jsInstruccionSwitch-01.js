function mostrar()
{
	//tomo el mes
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	var mesDelAño;
	//var mensaje; puedo declarar una var mensaje y usar solo un alert.
	mesDelAño=txtIdMes.value;


	switch(mesDelAño)
	{
		case'Enero':
			alert("¡Que comiences bien el año!");
		break;
		case'Marzo':
			alert("¡A clases!");
		break;
		case'Julio':
			alert("¡Se vienen las vacaciones!");
		break;
		case'Diciembre':
			alert("¡Felices fiestas!");
		break;
		default:
			alert("No ingresó un mes correspondiente.");
		break;
	}


}//FIN DE LA FUNCIÓN


/*var letra;

switch(x) // evalúa enteros, caracteres, cadenas (strings)
{
	caso 1:
		sentencias... //ejecuto las sentencias que necesito que se ejecuten para este caso

	break;
	caso 2:
		sentencias...
	
	break;
	caso 3:
		sentencias...

	break;
	default:

	break;
}




if(letra=="a")
{
	alert("Ingreso la a")
}
else
{
	if(letra=="e")
	{

	}
	else
	{
		if(letra==i)
		{

		}
	else
	{
		if(letra=o)
		{

		}
	else
	{
		if(letra=u)
		{

		}
	}
	}
	}
}*/
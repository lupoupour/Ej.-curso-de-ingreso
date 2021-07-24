function mostrar()
{
	var numeroRandom;
	var mensaje;

	numeroRandom=Math.floor(Math.random() * 10) + 1;
	console.log("el número random es: "+numeroRandom);

	if(numeroRandom==9 || numeroRandom==10)
	{
		mensaje="EXCELENTE"
	}

	else
	{
	if(numeroRandom>3)
	{
		mensaje="APROBÓ"
	}	
	else
	{
		mensaje="Vamos, la próxima se puede."
	}
}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
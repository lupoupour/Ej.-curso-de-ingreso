function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var numeroRandom;

	
	contador=0;
	acumulador=0;

	while(contador!=5)
	{
		numeroRandom=Math.floor(Math.random() * 100) + 1
		acumulador=acumulador+numeroRandom
		console.log(numeroRandom)

		contador=contador+1
	}

	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}
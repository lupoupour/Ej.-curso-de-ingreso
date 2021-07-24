/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var valorPrompt;

	contador=0;
	acumulador=0;
	respuesta='no';

	while(respuesta!="si")
	{
		valorPrompt=prompt("Ingrese un número.")
		
		valorPrompt=parseInt(valorPrompt)
		console.log(valorPrompt)
		acumulador=acumulador+valorPrompt
		contador=contador+1
		
		respuesta=prompt("¿Querés el resultado?")
	}


	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}
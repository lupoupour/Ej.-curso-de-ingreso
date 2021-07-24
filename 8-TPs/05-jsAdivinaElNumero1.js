/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	var numeroRandom=Math.floor(Math.random() * 100) + 1;
	console.log("el número random es: "+numeroRandom);

	numeroSecreto=numeroRandom;

	contadorIntentos=0;

}

function verificar()
{
	contadorIntentos=contadorIntentos+1;
	var numeroParaVerificar=document.getElementById('txtIdNumero').value;
	numeroParaVerificar=parseInt(numeroParaVerificar);

	if(numeroParaVerificar==numeroSecreto)
	{
		mensaje="¡Usted es un ganador! Y en solo "+contadorIntentos+" intentos."
	}	
	else
	{
		if(numeroParaVerificar<numeroSecreto)
		{
			mensaje="Falta para llegar al número secreto."
		}
		else
		{
			mensaje="Se pasó del número secreto."
		}
	}

	alert(mensaje);
}
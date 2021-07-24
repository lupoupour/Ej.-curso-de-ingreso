/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var contador;

	contador=0; //1 siempre iniciamos contador en 0, excepto si el ejercicio dice que es descendente, ahí lo terminamos en 0

	while(contador<10) //2
	{
		contador=contador+1
		console.log(contador);

	}

	/*var edad=22; // 1 --> inicializar la variable

	while(edad<18) //2
	{
		edad=prompt("Ingrese Edad");
		edad=parseInt(edad);

		console.log("No es mayor a 18"); //3 --> cambia la lógica para poder salir del while
	}

3 formas de romper un while: no entrar nunca, 
no salir nunca o anularlo con un ; 
El while NO LLEVA ;
Hay 3 puntos que SIEMPRE tienen que estar en while.
Marcados como comentarios.

	alert('iteración while');
*/

}//FIN DE LA FUNCIÓN
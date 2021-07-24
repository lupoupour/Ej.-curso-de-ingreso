/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	//los promedios van fuera del while. La diferencia tamb.
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos=0;
	var promedioNegativos=0;
	var diferencia;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número.");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado;
			cantidadNegativos=cantidadNegativos+1;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				cantidadCeros=cantidadCeros+1;
			}
		}

		if(numeroIngresado%2==0)
		{
			cantidadPares=cantidadPares+1;
		}

		
		respuesta=prompt("¿Desea continuar ingresando números?");

	}//fin del while

	promedioNegativos=sumaNegativos/cantidadNegativos;
	promedioPositivos=sumaPositivos/cantidadPositivos;

	diferencia=sumaPositivos-sumaNegativos;

	document.write("La suma de negativos es :"+sumaNegativos);
	document.write("<br>");
	document.write("La suma de positivos es :"+sumaPositivos);
	document.write("<br>");
	document.write("La cantidad de negativos es :"+cantidadNegativos);
	document.write("<br>");
	document.write("La cantidad de positivos es :"+cantidadPositivos);
	document.write("<br>");
	document.write("La cantidad de ceros es :"+cantidadCeros);
	document.write("<br>");
	document.write("La cantidad de números pares es :"+cantidadPares);
	document.write("<br>");
	document.write("El promedio de los números positivos es :"+promedioPositivos);
	document.write("<br>");
	document.write("El promedio de los números negativos es :"+promedioNegativos);
	document.write("<br>");
	document.write("La diferencia entre los números positivos y los negativos es de :"+diferencia);

}
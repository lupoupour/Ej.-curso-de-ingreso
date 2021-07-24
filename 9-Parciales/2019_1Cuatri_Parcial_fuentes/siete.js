function mostrar()
{

	var altura;
	var sexo;
	var contador=0;
	var sumaAlturas;

	while(contador<5)
	{
	
		altura=prompt("Ingrese su altura en centímetros");
		altura=parseInt(altura);

		if(altura>-1 && altura<251)
		{
			sumaAlturas=sumaAlturas+altura;
			contador++;
		}
		else
		{
			alert("La altura ingresada no es válida. Ingrésela nuevamente.")
		}
	}


}

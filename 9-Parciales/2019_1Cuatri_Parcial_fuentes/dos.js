function mostrar()
{
	var nombreUno;
	var nombreDos;
	var pesoUno;
	var pesoDos;
	var pesoTotal;
	var promedioPeso;
	var mensaje;

	nombreUno=prompt("Ingrese un nombre para la primera persona");
	pesoUno=prompt("Ingrese un peso para la primera persona");
	pesoUno=parseInt(pesoUno);

	nombreDos=prompt("Ingrese un nombre para la segunda persona");
	pesoDos=prompt("Ingrese un peso para la segunda persona");
	pesoDos=parseInt(pesoDos);

	pesoTotal=pesoUno+pesoDos;
	promedioPeso=pesoTotal/2;

	mensaje="Ustedes se llaman "+nombreUno+" y "+nombreDos+" y pesan "+pesoUno+" y "+pesoDos+" kilos, y la suma de los dos es de "+pesoTotal+" kilos, y el promedio de sus pesos es de "+promedioPeso+" kilos.";

	alert(mensaje);

  
}

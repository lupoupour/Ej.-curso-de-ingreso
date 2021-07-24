
function mostrar()
{
	var medidaLado;
	var perimetro;
	var mensaje;

	medidaLado=prompt("Ingrese la medida del lado del triangulo en centimetros.");
	medidaLado=parseInt(medidaLado);

	perimetro=medidaLado*3;

	mensaje="El perimetro del triangulo es de "+perimetro+" centimetros.";

	alert(mensaje);



}

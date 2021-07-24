/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var ingreseTemperatura;
	var temperaturaEnCentígrados;
	var mensaje;

	ingreseTemperatura=document.getElementById('txtIdTemperatura').value;
	ingreseTemperatura=parseInt(ingreseTemperatura);

	temperaturaEnCentígrados=(ingreseTemperatura-32)*(5/9);

	mensaje=ingreseTemperatura+" Farenheit son "+temperaturaEnCentígrados+" Grados Centígrados.";

	alert(mensaje);

	
}

function CentigradosFahrenheit () 
{
	var ingreseTemperatura;
	var temperaturaEnFarenheit;
	var mensaje;

	ingreseTemperatura=document.getElementById('txtIdTemperatura').value;
	ingreseTemperatura=parseInt(ingreseTemperatura);

	temperaturaEnFarenheit=(9/5*ingreseTemperatura)+32;

	mensaje=ingreseTemperatura+" Grados Centígrados son "+temperaturaEnFarenheit+" Farenheit.";

	alert(mensaje);

	
}

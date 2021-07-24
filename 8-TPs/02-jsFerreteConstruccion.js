/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perímetro;
	var alambreTotal;
	var mensaje;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	perímetro=largo*2+ancho*2;
	alambreTotal=perímetro*3;
	//ya que se deben dar 3 vueltas al perímetro con el alambre.

	mensaje="La cantidad de alambre a comprar es "+alambreTotal+" metros.";

	alert(mensaje);



}
function Circulo () 
{
	var radioDelTerreno;
	var alambreTotal;
	var mensaje;
	var resultadoRadio;
	var totalResultadoRadio;
	var pi

	radioDelTerreno=document.getElementById('txtIdRadio').value;
	radioDelTerreno=parseInt(radioDelTerreno);

	pi=3.14
	resultadoRadio=pi*radioDelTerreno**2;
	totalResultadoRadio=resultadoRadio*3;
	//considerando que se deben dar 3 vueltas al terreno con el alambre.

	mensaje="La cantidad de alambre a comprar es: "+totalResultadoRadio+" metros.";
	
	alert(mensaje);
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasCemento;
	var bolsasCal;
	var mensaje;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseInt(ancho);

	area=largo*ancho/2;

	bolsasCemento=area*2;
	bolsasCal=area*3;
	//considerando que para un piso de 1mx1m (1m2 de área) se necesitan 2 bolsas de cemento y 3 de cal, se establecen reglas de 3 simples para determinar la cantidad necesaria de materiales para el área obtenida a partir de las medidas ingresadas.

	mensaje="Para las medidas ingresadas, se necesitan comprar "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal.";

	alert(mensaje);

	
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var mensaje;

	precioUno=document.getElementById('txtIdPrecioUno').value
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	mensaje="El resultado de la suma es: "+suma;

	alert(mensaje);
	
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;
	var mensaje;

	precioUno=document.getElementById('txtIdPrecioUno').value
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;
	mensaje="El resultado del promedio es: "+promedio;

	alert(mensaje);
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioFinal;
	var mensaje;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	iva=1.21;
	precioFinal=suma*iva;
	mensaje="El precio final es: "+precioFinal;

	alert(mensaje);
	
}
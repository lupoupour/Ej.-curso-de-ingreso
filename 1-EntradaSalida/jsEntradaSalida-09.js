/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var aumento
	var porcentaje

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	porcentaje=prompt("Ingrese el porcentaje de aumento que desea");
	porcentaje=parseInt(porcentaje);
	//Siempre que esté trabajando con variables que van a ser números durante todo mi código,
	//DEBO parsearlo con parseInt, para evitar que se puedan ingresar textos. Entonces, si por prompt
	//traigo un número, debo parsearlo después. 

	aumento=sueldo*porcentaje/100;
	resultado=sueldo+aumento;

	document.getElementById('txtIdResultado').value=resultado;

}

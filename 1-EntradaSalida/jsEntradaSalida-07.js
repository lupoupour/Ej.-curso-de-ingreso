/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);


	suma=numeroUno+numeroDos
	mensaje="El resultado de la suma es: "+suma;

	alert(mensaje);	
}

function restar()
{ 
	var numeroUno;
	var numeroDos;
	var resta;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value
	numeroDos=parseInt(numeroDos);


	resta=numeroUno-numeroDos
	mensaje="El resultado de la resta es: "+resta;

	alert(mensaje);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicación;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value
	numeroDos=parseInt(numeroDos);


	multiplicación=numeroUno*numeroDos
	mensaje="El resultado de la multiplicación es: "+multiplicación;

	alert(mensaje);
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var división;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value
	numeroDos=parseInt(numeroDos);


	división=numeroUno/numeroDos
	mensaje="El resultado de la división es: "+división;

	alert(mensaje);
	
}


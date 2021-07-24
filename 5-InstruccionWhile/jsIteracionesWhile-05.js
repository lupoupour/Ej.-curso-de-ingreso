/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("ingrese f o m.");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Error. El sexo ingresado no es correcto.")
	}

	document.getElementById('txtIdSexo').value=sexoIngresado	
}
function mostrar()
{
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("mayor");
		
} 

	else
	{
	 if(edad<13)
	{ 
		alert("niño");
	}else
	{


		alert("adolescente");
		}
	}
}



	



//FIN DE LA FUNCIÓN
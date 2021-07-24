/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas)
 y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
    var sueldoIngresado;
    var legajo;
    var nacionalidad;

    edadIngresada=prompt("Ingrese su edad.");
    edadIngresada=parseInt(edadIngresada);


    while(edadIngresada<18 || edadIngresada>90)
    {
            edadIngresada=prompt("La edad es incorrecta. Por favor ingrese una edad válida.");
    }
    
    document.getElementById('txtIdEdad').value=edadIngresada;

    sexoIngresado=prompt("Ingrese su sexo.");
    sexoIngresado=sexoIngresado.toLowerCase();
    
    while(sexoIngresado!="f" && sexoIngresado!="m")
    {
        sexoIngresado=prompt("Error. El sexo ingresado es incorrecto. Por favor ingréselo nuevamente.")
    }

    document.getElementById('txtIdSexo').value=sexoIngresado;

    estadoCivilIngresado=prompt("Ingrese su estado civil: 1 si es soltero, 2 si es casado, 3 si es divorciado y 4 si es viudo.");
    estadoCivilIngresado=parseInt(estadoCivilIngresado);
    

    while(estadoCivilIngresado<1 || estadoCivilIngresado>4)
    {
        estadoCivilIngresado=prompt("El estado civil ingresado no existe. Por favor ingréselo nuevamente.");
    }

    document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;

    sueldoIngresado=prompt("Ingrese su sueldo bruto.");
    sueldoIngresado=parseInt(sueldoIngresado);

    while(sueldoIngresado<8000)
    {
        sueldoIngresado=prompt("El sueldo ingresado no es válido. Ingrese un nuevo sueldo.");
    }

    document.getElementById('txtIdSueldo').value=sueldoIngresado;

    legajo=prompt("Ingrese su número de legajo.");
    legajo=parseInt(legajo);

    while(legajo<1000 || legajo>9999)
    {
        legajo=prompt("El número de legajo ingresado es incorrecto. Por favor ingréselo nuevamente.");
    }

    document.getElementById('txtIdLegajo').value=legajo;

    nacionalidad=prompt("Ingrese su nacionalidad. “A” para argentinos, “E” para extranjeros y “N” para nacionalizados.");
    nacionalidad=nacionalidad.toLowerCase();

    while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
    {
        nacionalidad=prompt("La nacionalidad ingresada es incorrecta. Por favor ingrésela nuevamente.");
    }

    document.getElementById('txtIdNacionalidad').value=nacionalidad;

}

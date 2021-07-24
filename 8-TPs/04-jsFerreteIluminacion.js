/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var precio;
    var descuento;
    var precioConDescuento;
    var mensaje;
    var marca;
    var impuesto;
    var impuestoIIBB;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);
    marca=document.getElementById('Marca').value;

    precio=35*cantidadLamparas;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento=0
        switch(marca)
        {
            default:
            break;
        }
        break;

        case 3:
        descuento=5
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento=15
            break;
            case "FelipeLamparas":
                descuento=10
            break;
        }
        break;

        case 4:
        descuento=20
        switch(marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento=25
            break;
        }
        break;

        case 5:
        descuento=30
        switch(marca)
        {
            case "ArgentinaLuz":
                descuento=40
            break;
        }
        break;

        default:
            descuento=50
        break;
    }

    precioConDescuento=precio*descuento/100;
    precioFinal=precio-precioConDescuento;
    mensaje="El precio de las lamparitas es "+precioFinal;

 
    if(precioFinal>120)
        
    {
        impuesto=10/100;
        impuestoIIBB=precioFinal*impuesto;
        mensaje="En concepto de IIBB, usted pagó "+impuestoIIBB+" pesos."
 
    }

    alert(mensaje);
}

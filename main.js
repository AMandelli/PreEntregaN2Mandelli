// Mensaje de bienvenida

function bienvenidoUsuario(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    alert("Hola " + nombreUsuario + " ¡bienvenido/a a nuestro sitio web!");
}
bienvenidoUsuario();

// Calculo de actualizacion de alquileres 

let alquiler = Number(prompt("Ingrese monto a calcular"));
console.log(alquiler);

const INDICE_BCOCENTRAL = 1.88;
console.log(INDICE_BCOCENTRAL);

let actualizacion = alquiler * INDICE_BCOCENTRAL;
console.log(actualizacion);

console.log("El monto actualizado es $" + actualizacion);
alert("El monto actualizado es $" + actualizacion);

let nuevoCalculo;
    
nuevoCalculo = prompt("¿Desea relizar un nuevo calculo?");
console.log(nuevoCalculo);
    
let nuevoMonto;

if(nuevoCalculo == "si"){
    nuevoMonto = Number(prompt("Ingrese el monto"));
    console.log(nuevoMonto);
    console.log(INDICE_BCOCENTRAL);
    actualizacion = nuevoMonto * INDICE_BCOCENTRAL;
    console.log(actualizacion);
    console.log("El monto actualizado es $" + actualizacion);
    alert("El monto actualizado es $" + actualizacion);
    alert("Gracias por utilizar nuestros servicios!");
       
}else if(nuevoCalculo == "no"){
    alert("Gracias por utilizar nuestros servicios!");
}else{
    alert("Funcion no disponible");
}

console.log("¡Gracias por utilizar nuestros servicios!"); 

// jueguemos a un juego

alert("Ahora te invito a que juegues conmigo... tenes que adivinar en que numero estoy pensado...");

let juego = Number(prompt("Ingrese un numero del 1 al 10"));
console.log(juego);

while(juego !=7){
    alert("El numero ingresado no es el que estoy pensando... seguí participando");

    juego = Number(prompt("Ingrese un numero del 1 al 10"));
}
alert("Felicidades! adivinaste que numero esta en mi cabeza");
console.log("Felicidades! adivinaste que numero esta en mi cabeza");
console.log("Gracias por utilizar nuestro sitio web :D");
document.write("Gracias por utilizar nuestro sitio web :D"); 

// calculadora interna

function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;    
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
        return 0;        
    }
}
        
console.log(calculadora(5, 5, "+"));
console.log(calculadora(5, 5, "-"));
console.log(calculadora(5, 5, "*"));
console.log(calculadora(5, 5, "/"));


// sistema de busqueda de propiedades para el usuario

alert("Sistema de busqueda de propiedades");

let tipo = prompt("Indique el tipo de propiedad que estas buscando");
let ambMin = Number(prompt("cantidad min de ambientes"));
let ambMax = Number(prompt("cantidad max de ambientes"));
let dormMin = Number(prompt("cantidad min de dormitorios"));
let dormMax = Number(prompt("cantidad max de dormitorios"));
let bañosMin = Number(prompt("cantidad min de baños"));
let bañosMax = Number(prompt("cantidad max de baños"));
let ope = prompt("¿busca alquiler o venta?");
let coch = prompt("¿que tenga cochera?");
let min = Number(prompt("valor minimo"));
let max = Number(prompt("valor maximo"));

const datosBusqueda = {
    tipo: tipo,
    ambientesMin: ambMin,
    ambientesMax: ambMax,
    dormitoriosMin: dormMin,
    dormitoriosMax: dormMax,
    bañosMin: bañosMin,
    bañosMax: bañosMax,
    operacion: ope,
    cochera: coch,
    minimo: min,
    maximo: max,
}

function mostrarPorpiedades(propiedades){
    propiedades.forEach(propiedades => {
        console.log(propiedades)
    });
}

function filtrarTipo(propiedades){
    if(datosBusqueda.tipo){
        return propiedades.tipo === datosBusqueda.tipo
    }
    return propiedades;
}

function filtrarAmbMin(propiedades){
    if(datosBusqueda.ambientesMin){
        return propiedades.ambientes >= datosBusqueda.ambientesMin
    }
    return propiedades;
}

function filtrarAmbMax(propiedades){
    if(datosBusqueda.ambientesMax){
        return propiedades.ambientes <= datosBusqueda.ambientesMax
    }
    return propiedades;
}

function filtrarDormMin(propiedades){
    if(datosBusqueda.dormitoriosMin){
        return propiedades.dormitorios >= datosBusqueda.dormitoriosMin
    }
    return propiedades;
}

function filtrarDormMax(propiedades){
    if(datosBusqueda.dormitoriosMax){
        return propiedades.dormitorios >= datosBusqueda.dormitoriosMax
    }
    return propiedades;
}

function filtrarBañosMin(propiedades){
    if(datosBusqueda.bañosMin){
        return propiedades.baños >= datosBusqueda.bañosMin
    }
    return propiedades;
}

function filtrarBañosMax(propiedades){
    if(datosBusqueda.bañosMax){
        return propiedades.baños <= datosBusqueda.bañosMax
    }
    return propiedades;
}

function filtrarTipoOperacion(propiedades){
    if(datosBusqueda.operacion){
        return propiedades.tipoDeOperacion === datosBusqueda.operacion
    }
    return propiedades;
}

function filtrarCochera(propiedades){
    if(datosBusqueda.cochera){
        return propiedades.cochera === datosBusqueda.cochera
    }
    return propiedades;
}

function filtrarPrecioMin(propiedades){
    if(datosBusqueda.minimo){
        return propiedades.precio >= datosBusqueda.minimo
    }
    return propiedades;
}

function filtrarPrecioMax(propiedades){
    if(datosBusqueda.maximo){
        return propiedades.precio <= datosBusqueda.maximo
    }
    return propiedades;
}

function noResultado(){
    console.log("No hay resultados");
}

function filtrarPropiedades(){
    let resultado = propiedades.filter(filtrarTipo). filter(filtrarAmbMin). filter(filtrarAmbMax). filter(filtrarDormMin). filter(filtrarDormMax). filter(filtrarBañosMin). filter(filtrarBañosMax). filter(filtrarTipoOperacion). filter(filtrarCochera). filter(filtrarPrecioMin). filter(filtrarPrecioMax)
    if(resultado.length){
    mostrarPorpiedades(resultado)
    } else {
        noResultado()
    }
}
filtrarPropiedades();




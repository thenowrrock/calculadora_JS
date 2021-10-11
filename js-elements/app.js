
//Definimos todos los elementos de nuestro DOM <div class = calculadora

//Boton asociados a la calculadora 
const boton_numeros = document.getElementsByName("data-num");
//console.log(boton_numeros);

const boton_opera = document.getElementsByName('data_opera');
//console.log(boton_suma);

const boton_limpiar =  document.getElementsByName('data_limpiar')[0];
//console.log(boton_limpiar);

const boton_igual =  document.getElementsByName('data_igual')[0];

let result = document.getElementById('result');
//console.log(result);

//aux variables
var operacion_actual = '';
var operacion_anterior = '';
var operacion = undefined;

//Crearemos los eventos de los botones que contiene la calculadoraJs
boton_numeros.forEach(function(boton){
    boton.addEventListener('click',function(){
         agregar_numero(boton.innerText);   
    })
});

boton_opera.forEach(function(boton){
    boton.addEventListener('click',function(){
        seleccionar_operacion(boton.innerText);   
    })
});


boton_igual.addEventListener('click',function(){
    calcular();
    actualizar_pantalla();
})

boton_limpiar.addEventListener('click',function(){
    limpiar_pantalla();
    actualizar_pantalla();
})

//funcion agregar numero 
function agregar_numero(num){
    operacion_actual = operacion_actual.toString() + num.toString();
    actualizar_pantalla();
}

//funcion actualizar_pantalla
function actualizar_pantalla(){
    result.value = operacion_actual;
}

//funcion limpiar_pantalla
function limpiar_pantalla(){
    operacion_actual = '';
    operacion_anterior = '';
    operacion = '';
}


//funcion seleccionar la operacion 
function seleccionar_operacion(op){
    if(operacion_actual === '') return ;
    if(operacion_anterior !== ''){
        calcular();
    }
    operacion = op.toString();
    operacion_anterior =operacion_actual;
    operacion_actual = '';

}


//funcion calcular
function calcular(){
    var calculo;
    const anterior = parseFloat(operacion_anterior);
    const actual = parseFloat(operacion_actual);
    if(isNaN(anterior) || isNaN(actual)) return;
    
    switch(operacion){
        case '+': calculo = anterior + actual; break;
        case '-': calculo = anterior - actual; break;
        case '*': calculo = anterior * actual; break;
        case '/': calculo = anterior / actual; break;
        case '%': calculo = anterior % actual; break;
        default: return;
            
    }
    operacion_actual = calculo;
    operacion = undefined;
    operacion_anterior  = '';
}

//Limpiar al actualizar la pag 
limpiar_pantalla();
let numeroSecreto
let intentos
let listaNumerosSorteados = []
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let htmlElemento = document.querySelector(elemento)
    htmlElemento.innerHTML = texto
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero es menor')
    }else{
        asignarTextoElemento('p', 'El numero es mayor')
    }
    intentos++
    limpiarCaja()
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja()
    // Indicar mensaje de inicio
    // Generar numero aleatorio 
    // Iniciarlizar numero de intentos
    condicionesIniciales()
    // Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}

condicionesIniciales()

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
        // Si el numero generado esta incliuda en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

var segundos = 0
var minutos = 0
var horas = 0

var cronometro = document.getElementById("cronometro")
var time 

function iniciar() {
    time = setInterval(timer, 1000)
    let btn = document.getElementsByTagName('button')[0]
    btn.style.display = 'none'
}

function pausar() {
    let pausa = clearInterval(time)
    let btn = document.getElementsByTagName('button')[0]
    btn.style.display = 'inline-block'

}

function reiniciar() {
    let reinicio = clearInterval(time)
    horas = 0
    minutos = 0
    segundos = 0
    cronometro.innerHTML = "00:00:00"
    let btn = document.getElementsByTagName('button')[0]
    btn.style.display = 'inline-block'

}

function timer() {
    
    segundos++
    if(segundos == 60){
        segundos = 0
        minutos++
        if(minutos == 60){
            minutos = 0
            horas++
        }
    }

    cronometro.innerHTML= (horas<10?"0"+horas:horas)+":"+(minutos<10?"0"+minutos:minutos)+":"+(segundos<10?"0"+segundos:segundos) 
}
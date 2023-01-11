let sec = 0
let min = 0
let hour = 0
var cont 

function start(){
    relogio()
    cont = setInterval(relogio, 1000)
}

function pause() {
    clearInterval(cont)
}

function stop(){
    clearInterval(cont)
    sec = 0
    min = 0
    document.getElementById('relogio').innerText = "00:00:00"
}

function num(digit){
    if(digit<10){
        return '0' + digit
    } else {
        return digit
    }
}

function relogio(){
    sec++

    if(sec == 60){
        sec = 0
        min++

        if(min == 60){
            min = 0
            hour++
        }
    }

    document.getElementById('relogio').innerText = num(hour) + ':' + num(min) + ':' + num(sec)
}
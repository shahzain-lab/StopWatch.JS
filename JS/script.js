window.onload = function(){
    var tens = 00;
    var second = 00;
    var minut = 00;
    var passTens =document.getElementById('tens');
    var passSecond =document.getElementById('second');
    var passMinut =document.getElementById('minuts');
    var btnStart =document.getElementById('start');
    var btnStop =document.getElementById('stop');
    var btnReset =document.getElementById('reset');
    var timeStarter;
    
    btnStart.onclick= function(){
        clearInterval(timeStarter);
        timeStarter = setInterval(timer , 10)
    }
    btnStop.onclick= function(){
        clearInterval(timeStarter);
    }
    btnReset.onclick =function(){
        clearInterval(timeStarter)
        tens=00;
        second=00;
        minut=00;
        passTens.innerHTML = tens;
        passSecond.innerHTML = second;
        passMinut.innerHTML = minut; 
    }

    function timer(){
        tens++;
        passTens.innerHTML = tens;
        if(tens < 100){
            passTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("second")
            second++;
            passSecond.innerHTML = second;
            tens = 0;
            passTens,innerHTML =tens;
           
        }
        if(second < 59){
            passSecond.innerHTML =second;
        }
        if(second > 59){
            minut++;
            passMinut.innerHTML =minut;
            second = 0;
            passSecond.innerHTML= second;
            
        }
    }

}
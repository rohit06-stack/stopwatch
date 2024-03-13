window.onload = function() {
    var seconds = 0;
    var tens = 0;
    var appendSecond = document.getElementById("seconds");
    var appendTen = document.getElementById("tens");
    var Starts = document.getElementById("start");
    var Stops = document.getElementById("stop");
    var Reset = document.getElementById("reset");
    var Interval;

    Starts.onclick = function(){
        clearInterval(Interval);
         Interval = setInterval(startTimer, 10);
    }
    Stops.onclick = function(){
        clearInterval(Interval);
    }
    Reset.onclick = function() {
        clearInterval(Interval);
       tens = "00";
         seconds = "00";
       appendTen.innerHTML = tens;
         appendSecond.innerHTML = seconds;
     }
     function startTimer () {
        tens++; 
        
        if(tens <= 9){
          appendTen.innerHTML = "0" + tens;
        }
        
        if (tens > 9){
          appendTen.innerHTML = tens;
          
        } 
        
        if (tens > 99) {
          seconds++;
          appendSecond.innerHTML = "0" + seconds;
          tens = 0;
          appendTen.innerHTML = "0" + 0;
        }
        
        if (seconds > 9){
          appendSecond.innerHTML = seconds;
        }
    }

}


$(document).ready( function() {

  function displayTime() {
    var currentTime = new Date();
    var gmt = 4;
		

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();


    if(hours < 10) {
      hours = "0" + hours;
    }
	if (hours > 24){
	
	hours = hours-24;
	}
    if(minutes < 10) {
      minutes = "0" + minutes;
    }        
    if(seconds < 10) {
       seconds = "0" + seconds;
    }


    var clockDivLondon = document.getElementById('clock');

    clockDivLondon.innerText = hours +gmt+ ":" + minutes + ":" + seconds;



   //Buenos Aires
   var gmt = 0;
   var clockDivBuenosAires = document.getElementById('clockBuenosAires');
   clockDivBuenosAires.innerText = hours+":"+minutes+":"+seconds;
   


   //San Francisco
   var gmt = -4;
   var clockDivSanFrancisco = document.getElementById('clockSanFrancisco');
   clockDivSanFrancisco.innerText = hours +gmt+ ":" + minutes + ":" + seconds;
   

   //Moscow	
   var gmt = 6;
   var clockDivMoscow = document.getElementById('clockMoscow');
   clockDivMoscow.innerText = hours +gmt+ ":" + minutes + ":" + seconds;
   	
  }

    
  
	
//(reciclo el código y lo aplico a los demás paises)
//buenos aires
   

  displayTime();
  setInterval(displayTime,1000);
  

  

  


  

});





  
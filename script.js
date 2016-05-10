

$(document).ready( function() {

  function displayTime() {
    var currentTime = new Date();
    var gmt = 4;
    
		

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var globalHours = hours+gmt;


    if(globalHours < 10) {
      globalHours = "0" + globalHours;
    }

	
    if(minutes < 10) {
      minutes = "0" + minutes;
    }        
    if(seconds < 10) {
       seconds = "0" + seconds;
    }
	

    var clockDivLondon = document.getElementById('clock');

    clockDivLondon.innerText = globalHours +":" + minutes + ":" + seconds;
	



   //Buenos Aires
   var gmt = 0;
   var clockDivBuenosAires = document.getElementById('clockBuenosAires');
   clockDivBuenosAires.innerText = hours+":"+minutes+":"+seconds;
   


   //San Francisco
   var gmt = -4;
   var globalHours = hours+gmt;
	if(globalHours<0){
	  globalHours = globalHours+24;
	} 


	 
	
   var clockDivSanFrancisco = document.getElementById('clockSanFrancisco');
   clockDivSanFrancisco.innerText = globalHours + ":" + minutes + ":" + seconds;
   

   //Moscow	
   var gmt = 6;
   var globalHours = hours+gmt;
		
	if(globalHours>24){
	globalHours = globalHours-24;
	}	

   var clockDivMoscow = document.getElementById('clockMoscow');
   clockDivMoscow.innerText = globalHours+ ":" + minutes + ":" + seconds;
   	
  }
   
    
    
  
	
//(reciclo el código y lo aplico a los demás paises)
//buenos aires
   

  displayTime();
  setInterval(displayTime,1000);
  

  

  


  

});





  

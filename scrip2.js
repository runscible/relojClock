 
  $(document).ready(function(){
    alert("el script2 funciona");
  function displayTimeBuenosAires() {
    var currentTime = new Date();
    var utf1 = 0;
		

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
	}
   
   var clockDivBuenosAires = document.getElementById('clockBuenosAires');
   clockDivBuenosAires.innerText =("prueba");
   displayTimeBuenosAires();
   setInterval(displayTimeBuenosAires,1000);
   });
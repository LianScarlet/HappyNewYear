(function(){


	var timebox = document.getElementById('timebox');

	updateTime();

	function updateTime(){

		var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == 4 ) {
	           if(xmlhttp.status == 200){
	               timebox.innerHTML= xmlhttp.responseText;
	           }
	        }
	    }
	    xmlhttp.open("GET", "time.php", true);
	    xmlhttp.send();

		setTimeout(updateTime,1000);
	}



})();
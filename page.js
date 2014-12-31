(function(){
	var current = 2;
	var page = document.getElementById('page');
	var tb = document.getElementById('tb');
	var sum = document.getElementsByClassName('flex').length-1;
	var main = document.getElementById("main");
	var d = 0;
	var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel";
	main.addEventListener(mousewheelevt, channgepage, false);

	setTimeout(function(){
		current = 0; 
		page.style.transform="translate3d(0,-"+current+"00%,0)";
		tb.style.opacity = "1";
	},1000);

	function channgepage(e){
		var evt = window.event || e;
		// down
		d+=evt.wheelDelta;

		if(evt.wheelDelta<0 && d<=-240){
			
			if(current<sum ){
				d=0;
				current++;
				tb.style.opacity = "0";
				page.style.transform="translate3d(0,-"+current+"00%,0)";
			}
		}// up
		else{	
			if(current>0 && d>=240){
				d=0;
				current--;
				if(current==0) tb.style.opacity = "1";
				page.style.transform="translate3d(0,-"+current+"00%,0)";	
			}
		}
	}


})();
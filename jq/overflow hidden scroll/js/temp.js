

window.onload = function() {

	var sq = {};
	sq.e = document.body;

	if (sq.e.addEventListener) {
		sq.e.addEventListener("mousewheel", MouseWheelHandler, false);
		sq.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
	}
	else sq.e.attachEvent("onmousewheel", MouseWheelHandler);

	function MouseWheelHandler(e) {
		// cross-browser wheel delta
		var e = window.event || e;
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

		if(delta > 0){
			console.log('up');
			sq.e.scrollTop -= 100;
		}else{
			console.log('down');
			sq.e.scrollTop += 100;
		}

	}

}



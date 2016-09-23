var lastScrollLeft = 0;
window.onload= function(){
	lastScrollLeft =($(window).width()/2)-($('.btn').width()/2);
	$('.btn').css({'left':lastScrollLeft+'px'});
}

$(window).scroll(function() {
	var documentScrollLeft = $(document).scrollLeft();
	if(lastScrollLeft < documentScrollLeft){
		console.log(documentScrollLeft-lastScrollLeft);
	}else if(lastScrollLeft > documentScrollLeft){
		console.log(-(lastScrollLeft-documentScrollLeft));
	}else{
		console.log("==");
	}
	$('.btn').css({'left': lastScrollLeft+'px'});

});
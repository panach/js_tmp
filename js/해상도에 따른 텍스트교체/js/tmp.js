/*  */






var textChange = {
	text: { // 변경할 텍스트 객체
		'800': 'test0',
		'801': 'text1',
		'1001': 'text2'
	},
	breakpoint: null, // 텍스트 변경 시점을 구분하는 값
	widthCheck: function(){ // 현재 win 넓이를 가져와 넓이를 정의한다
		var win_width = window.outerWidth; //window 의 outerWidth 를 가져온다
		if(win_width <= 800){ //가져온 넓이를 기준넓이와 비교하여 리턴한다
			return 800;
		}else if((800 < win_width) && (win_width <= 1000)){ //범위를 확인하여 둘다 만족할때 리턴한다
			return 801;
		}else if(win_width >= 1001){
			return 1001;
		}
	},
	action: function() { //실제 외부에서 호출하는  객체
		if(!(this.widthCheck() == this.breakpoint)){ // 실제 텍스트를 변경할때는
			this.breakpoint = this.widthCheck(); //breakpoint 를 현제 해상도의 기준점으로 변경한다
			document.getElementById('con_about_text').innerHTML  = this.text[this.breakpoint]; //텍스트를 배열객체에서 가져온다
		}
	}
}

window.onload = function() {
	textChange.breakpoint = (textChange.breakpoint == null) ? textChange.widthCheck() : '1001';
	textChange.action();
};// win.onload


window.onresize = function() {
	textChange.action();
}// win.onresize



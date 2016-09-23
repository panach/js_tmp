/* 목적 */
//background-size: cover 를 ie7, ie8 에서 비슷한 효과를 내도록 한다


/* 필요 핵심 기능 */
//배경이 되는 img 태그의 사이즈를 부모요소와 동일하게 유지한다.
// 1. 배경으로 사용될 이미지 지정
// 2. 지정된 이미지의 크기를 브라우저 또는 body 사이즈로 변경
// 3. 브라우저 resize 를 이용하여 반응하도록 만든다
// 4. ie7, ie8 을 찾아낸다
// 5. ie7, ie8 이외의 브라우저에서는 divplay:none 시킨다


/* 알고리즘 */


/* 참고 */


/* 차후 추가할 내용 */
// 1. cover 와 contain 을 설정할수있도록 한다
// 2. 엘리먼트를 마크업에서 추가하지 않고 css 의 cover 나 contain 을 찾아 내어 ie7,8 에서만 엘리먼트를 추가하는 방법을 찾는다
// 참조 https://css-tricks.com/perfect-full-page-background-image/




function detectIE() { // ie 브라우저 찾기
    var ua = window.navigator.userAgent; // 브라우저의 정보를 함수에 저장
/*
window.navigator.userAgent 브라우저의 정보를 호출한다
이는 브라우저마다 출력되는 텍스트의 형태가 다르다

크롬
Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36

ie 7
Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; APCPMS=^N201205020840572565478A37A6F9C41BD33F_3118^; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3)

ie 11
Mozilla/5.0 (Windows NT 6.1; APCPMS=^N201205020840572565478A37A6F9C41BD33F_3118^; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; InfoPath.3; rv:11.0) like Gecko

위처럼 브라우저를 출력하는 내용이 다르므로  버전을 찾아낼때 사용되는 key 값도 다르다

*/


    var msie = ua.indexOf('MSIE '); //indexOf 는 텍스트의 단어를 검색하여 시작 index 를 리턴한다. 찾는단어가 없으면 -1 을 리턴한다
    if (msie > 0) { // IE 10 / older
		// 찾는 단어가 잇으면 아래를 실행한다.
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		// parseInt(a, b) a를 b진수로 정수화한다
		// substring(시작index, 종료index) - 시작index 부터 종료index 전의 텍스트를 반환한다
		// indexOf(a,b)  a = 검색할 단어, b = 검색 시작 위치 (생략가능)
		// return 을 하였기 때문에 if 문이 실행되게 되면 detectIE에 return 값을 던져주고 아래 내용은 실행하지 않는다
    }
    var trident = ua.indexOf('Trident/');
	// 검색 단어를 바꾸어 다른 브라우저에도 검색할수 있도록 한다
    if (trident > 0) { // IE 11
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {// Edge (IE 12+)
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
    // 그외
	//ie 이외의 브라우저는 false 를 리턴한다
    return false;
}


function resizeBg() { // ie7,ie8 배경 cover 효과
	var tempVal = detectIE(), // 결과값을 변수에 저장
		$theWindow = $(window), // 윈도우를 변수에 저장
	    $bg = $('.resize_bg'), // 대상이 될 이미지를 지정한다
	    aspectRatio = $bg.width() / $bg.height(),
		windowRatio = $theWindow.width() / $theWindow.height();

	if(tempVal){ //ie 브라우저 사용시
		if(tempVal == '7' || tempVal == '8'){ //ie7,8 이면 아래 내용 실행
			$bg.css({
				'position': 'absolute',
				'top': '50%',
				'left': '50%',
				'z-index': '-1'
			});
			if (windowRatio < aspectRatio) {
				$bg.css({
					'width': 'auto',
					'height': $theWindow.height()
				})
			} else {
				$bg.css({
					'width': $theWindow.width(),
					'height': 'auto'
				})
			}
			$bg.css({'margin': ('-' + $bg.height() / 2 + ' 0 0 ' + '-' + $bg.width() / 2)});

		}
	}else{
		$bg.css({'display': 'none'});
	}
}


window.onload = function() {
	resizeBg();
};// win.onload

window.onresize = function() {
	resizeBg();
}// win.onresize




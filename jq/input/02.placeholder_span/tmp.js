/* 목적 */
// 하위 브라우저에서 span 을 이용하여 placeholder 를 대신할수 있도록 한다

/* 필요 핵심 기능 */
// 1. 엘리먼트내에 텍스트 유무 확인
// 2. span의 숨김 처리
// 3. 1번에 상황에 따른 span 숨김 처리 취소
// 4. 포커스에 대한 처리 (탭이동시)

/* 알고리즘 */
// 1. span의 클릭 이벤트를 만든다
// 2. 클릭 이벤트에 함수(ipt_func)를 호출한다
// 3. ipt_func 에서 할일
// 3-1. 라벨을 숨긴다
// 3-2. span 클릭일때 포커스를 input 에 이동 시킨다
// 3-3. focusout 일때 input 의 값이 비어있는지 차있는지에 따라 span 을 숨김해제할것인지 계속 숨김처리할것인지 구분한다
// 3-4. 3번을 구성하며 필요한 변수를 정리 한다.(이벤트 하위 브라우저호환성, 이벤트의 부모요소, 인풋의 텍스트, 라벨의 트래킹)

/* 자업중 해결해야하는 문제점 */
// input 에 스페이스바로 값이 들어갈 경우 텍스트로 인식하게 된다


function ipt_func(e){
	var event = e || window.event, // 이벤트를  하위 브라우저에서 호환 되도록 구분한여 변수에 담는다
		tmpParent = $(this).parent(), // 클릭/포커스시 label 또는 input 의 부모요소. 즉 ipt_box 를 변수에 담는다
		tmpTxt = $.trim(tmpParent.children('input').val()), //input 에  값을(.val()) 좌우 여백 없이 (trim()) 만들어 변수에 담는다
		tmpLabe = tmpParent.children('span'); // label 을 tampParent 로 부터 시작하여 호출한다

	tmpLabe.css({'z-index':'-1','font-size':'0','line-height':'0','color':'transparent'}); // 라벨을 뒤로 숨긴다
	switch(event.type){ // 이벤트에 따라 진행 동작을 분리 한다
		case 'click' : // 클릭일때
			tmpParent.children('input').focus(); //label 의 기본동작을 맞았다. 그래서 label 클릭시 인풋에 포커스를 이동시킨다
			break;
		case 'focusout' : // input의 포커스 아웃 시에 label 에 주었던 숨기는 속성을 모두 초기화 시킨다
			if(!tmpTxt){
				tmpLabe.css({'z-index':'','font-size':'','line-height':'','color':''});
			}
			break;
	}

	//return false; // 기본 동작 리셋

}//ipt_func


$('.ipt_box span').on('click',ipt_func); // 라벨 클릭시 함수호출
$('.ipt_box input').on('focusin focusout',ipt_func); // input 에 포커스일때 함수 호출




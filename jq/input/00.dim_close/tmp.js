/* 목적 */
// 클릭 이벤트를 통해 엘리먼트를 조작하고 조건에 따라 다르게 동작하도록 한다


/* 필요 핵심 기능 */
// 1. 클릭이벤트에 따라 함수 호출A
// 2. 함수A 할일
// 2-1. 딤드를 상태를 확인 하여 활성화/ 비활성화를 한다

/* 알고리즘 */
// 1. 활성화 버튼과 닫기 버튼을 한꺼번에 click 이벤트를 걸어 함수A를 호출한다
// 2. 함수A 는 다음과 같은 일을 한다.
// 2-1. 딤드의 display 상태를 확인하여
// 2-2. none 일때는 block 으로 만들고
// 2-3. none 이외의 상태일때는 none 처리 시킨다
// 3  input 버튼과 a 태그일때 기본동작이 있으므로 return flase 로 기본동작과 버블링을 초기화한다


/* 참고 */
// 위 내용은 어떤 버튼을 누르던 none / block 을 반복하게 된다.
// 버튼에 따라 none 만 시키거나 block 을 시키고자 한다면 함수를 나누어 기능을 불리하거나
// 함수내에 클릭된 버튼을 구분하여 동작을 다르게 주면된다.


/* 작업중 해결해야하는 문제점 */
// 1-1. 상태 확인을 엘리먼트의 속성으로 할것인가?
// 1-2. 임시 변수를 만들것인가?
// 1-3. 사용자정의 속성을 사용할것인가?

function dim_active(){
	var targetElement = $('.dim'), //딤드를 함수에 담는다
		state = targetElement.css('display'); //딤드의 display 상태를 함수에 담는다

	if(state == 'none'){ //state 가 none 일때
		targetElement.css({'display':'block'}); //딤드의 css 를 제어 하여 display 를 block처리 한다
	}else{
		targetElement.css({'display':'none'}); //딤드의 css 를 제어하여 display 를 none 처리 한다
	}

	return false; // a 의 기본 동작 리셋

}//ipt_func

$('.btn_active_ipt, .btn_active, .btn_close').on('click',dim_active); // 활성화 버튼 2개중 한개만 클릭해도 함수 호출




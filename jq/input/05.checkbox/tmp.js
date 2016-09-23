/* 목적 */

/* 필요 핵심 기능 */
// input 과 label 의 트래킹
// input 체크 확인
// input name 에 따라 checked 초기화
// class 추가/삭제
// 속성(attr) 추가/삭제


/* 알고리즘 */
// 1. 클릭 이벤트가 발생하면 함수를 호출한다
// 2. 함수에서 하는 일

// 2-1 checked 일때
// 2-1-1 클릭된 label 이전 엘리먼트인 input 에 checked 속성을 준다
// 2-1-2 label 에 active 속성을 준다

// 2-2 checked가 아닐때
// 2-2-1 클릭된 label 이전 엘리먼트인 input 에 checked 속성을 준다
// 2-2-2 label 에 active 속성을 준다

// 3. 반복 사용되는 코드는 변수로 만들어 재사용한다.

/* 참고 */
// 만약 inbput 과 label 의 순서가 바뀌게 된다면
// 아래 코드를 변경한다

//var a = $(this).prev('input:checkbox'),
//var a = $(this).next('input:checkbox'),


function ipt_ckb(event){
	var a = $(this).prev('input:checkbox'),
		b = a.attr('checked');

	if(b == undefined){
		$(this).addClass('active');
		a.attr('checked', true);
	}else{
		$(this).removeClass('active');
		a.removeAttr('checked');
	}

};

$('.ipt_ckb').on('click',ipt_ckb);


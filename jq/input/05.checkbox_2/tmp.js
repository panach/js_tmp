/* 목적 */

/* 필요 핵심 기능 */
// input 과 label 의 트래킹
// input 체크 확인
// input name 에 따라 checked 초기화
// label의 for 를 확인하여 input 의 아이디 타겟팅
// class 추가/삭제
// 속성(attr) 추가/삭제


/* 알고리즘 */
// 1. 클릭 이벤트가 발생하면 함수를 호출한다
// 2. 함수에서 하는 일

// 2-1 checked가 아닐때
// 2-1-1 현제 클릭한 label 에 클래스를 추가한다.
// 2-1-2 for 속성을 이용하여 input을 타겟팅하고 checked 속성을 추가한다


// 2-2 checked 일때
// 2-2-1 label의 active 클래스 제거
// 2-2-2 타겟input 을 찾고 해당 클래스에 checked 속성을 제거 한다

// 3. 반복 사용되는 코드는 변수로 만들어 재사용한다.

function ipt_ckb(event){
	var a = $(this).attr('for'), // for 에 사용된 텍스트(id 값)을 받아 변수에 저장
		b = $('#'+a).attr('checked'); // a 변수에서 받은 값을 이용해 id 로 트래킹을하고 해당 엘리먼트에 checked 속성이 잇는지 받아온다

	if(b == undefined){ //b 변수에 undefined 이면
		$(this).addClass('active'); //현제 this(클릭된 label)에 active 클래스를 추가
		$('#'+a).attr('checked', true); // b 를 이용하여 트래킹한 엘리먼트의 checked 속성을 찾아
	}else{ // 그외(checked) 이면
		$(this).removeClass('active'); //label 의 active 를 삭제 한다
		$('#'+a).removeAttr('checked'); //
	}

};

$('.ipt_ckb').on('click',ipt_ckb);

/* 참고 */
// if 문에서 조건식을 b 를 이용한 checked 와 undefined 로 구분하고 있다
// 이를 label 의 active 클래스 유무로 바꾸어 사용해도 괜찮다

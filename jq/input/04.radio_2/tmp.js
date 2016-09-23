/* 목적 */

/* 필요 핵심 기능 */
// input 과 label 의 트래킹
// input 체크 확인
// input name 에 따라 checked 초기화
// class 추가/삭제

/* 알고리즘 */
// 1. label 을 클릭시 함수A 를 호출
// 3. 클릭시
// 3-0 클릭된 label 의 이전 엘리먼트인 input 의 checked 를 확인한다.
//		checked 이면 다음을 실행한다
// 3-1. 전체 label에 class active 를 삭제 한다
// 3-2. 타겟 label 에 active 클래스 추가
// 3-3. 전체 input(name 이 동일한) :radio 에 checked 를 삭제한다.
// 3-4. 타겟 label 의 이전엘리먼트인 input:radio 의 ckecked 를 추가 한다.
// 4. 트래킹에 사용된 내용을 변수로 정리 하여 코드를 줄인다.

/* 참고 */
// input 과 label 의 순서를 바꾸는 경우 prev() 와 next() 를 찾아 아래와 같이 변경한다
// prev() -> next()
// next() -> prev()

function ipt_rdo(event){
	var a = $(this).prev('input:radio'), // 클릭된 label 의 이전 엘리먼트 input 을 찾는다
		b = a.attr('checked'), // a 에 checked 속성이 있는지 확인한다
		c = $('input:radio[name='+a.attr('name')+']'); // input 의 name 을 동일하게 사용하는 엘리먼트를 모두 찾는다

	if(b == undefined){// input 에 checked 속성이 있다면 아래를 실행
		c.removeAttr('checked'); //checked 속성 초기화
		c.next().removeClass('active'); // active 클래스명 초기화
		$(this).addClass('active'); // 클릭된 label 에 active 추가
		a.attr('checked', true); // 클릭된 label 의 이전 엘리먼트인 input 에 checked  속성을 추가
	};

};

$('.ipt_rdo').on('click',ipt_rdo);

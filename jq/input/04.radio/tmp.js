/* 목적 */
// input radio의 구조상 label 내부에 input 이 위치 할때 사용한다

/* 필요 핵심 기능 */
// input 과 label 의 트래킹
// input 체크 확인
// input name 에 따라 checked 초기화
// class 추가/삭제
// 캡처링/버블링 막기

/* 알고리즘 */
// 1. label 을 클릭시 함수A 를 호출
// 2. label 과 input 을 캡쳐링을 막는다.
// 3. 클릭시
// 3-0 클릭된 label 의 자식 요소인 input 의 checked 를 확인한다.
//		checked 이면 다음을 실행한다
// 3-1. label - 전체 라벨에 class active 를 삭제 한다
// 3-2. 타겟 label 에 active 클래스 추가
// 3-3. 전체 input(name 이 동일한) :radio 에 checked 를 삭제한다.
// 3-4. 타겟 label 의 자식요소인 input:radio 의 ckecked 를 추가 한다.


/* 자업중 해결해야하는 문제점 */
//캡쳐링 방지할것


function ipt_rdo(event){
     if(event.target == this){ // 캡쳐링 방지
        var a = $(this).children('input:radio'),
            b = a.attr('checked'),
            c = $('input:radio[name='+a.attr('name')+']');

        if(b == undefined){
            c.removeAttr('checked');
            c.parent().removeClass('active');
            $(this).addClass('active');
            a.attr('checked', true);
        };

    };
};

$('.ipt_rdo').on('click',ipt_rdo);

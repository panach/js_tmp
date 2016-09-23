

/*기본 동작*/
function ipt_ckb(event){
	var a = $(this).attr('for'),
		b = $('#'+a).attr('checked');

	if(b == undefined){
		$(this).addClass('active');
		$('#'+a).attr('checked', true);
	}else{
		$(this).removeClass('active');
		$('#'+a).removeAttr('checked');
	};

};

$('.ipt_ckb').on('click',ipt_ckb);

/* 추가 기능 */
// 추가된 버튼을 클릭하여 단일 그룹의 label 과 input 을 제어 한다

/* 필요 핵심 기능 */
// 전체 intput 을 타겟팅
// 조건문
// 클래스 및 속성 변경

/* 알고리즘 */
//클릭이벤트가 발생하면 함수를 실행한다.
//이 함수는 조건문을 통해 전체 체크 와 전체 체크 해제 를 한다.
//조건식은 변수 iptState 를 통해 true / false 로 구분하여 실행한다
//모두 체크일때는 addClass 와 attr 을 통해 label 과 input 에 클래스추가, 속성 변경을 실행하다
//모두 체크 해제 일때는 removeClass 와 removeAttr 을 통해 actvie 클래스를 제거 하고 인풋의 checked 를 삭제 한다
// 포인트는 반드시 iptState 는 트리거 역할을 하므로 조건문에 따라 실행이 이루어 지면 true 나 false 를 변경하여야 한다.

var iptState = true;
$('.btn_all').on('click', function(){
	if(iptState){
		$('label').addClass('active');
		$('input:checkbox').attr('checked', true);
		iptState = false;
	}else{
		$('label').removeClass('active');
		$('input:checkbox').removeAttr('checked');
		iptState = true;
	}
});

/* 참고 */
//위 소스는 input 그룹이 1개만 있는 상태이다
//여러 그룹일경우 위코드를 실행시키면 그룹과 상관없이 모두 제어된다
//이를 그룹별로 나누는 방법을 생각해 보면 좋은 스터디가 될것이다.





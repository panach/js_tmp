/* 목적 */
// 하위 브라우저에서 label 을 이용하여 placeholder 를 대신할수 있도록 한다

/* 필요 핵심 기능 */
// 1. 클릭된 앨리먼트의 인덱스(순서) 를 받는다.
// 탭버튼과 탭내용 부분의 인덱스를 트래킹 한다
// 클래스를 추가 삭제 한다

/* 알고리즘 */


/* 자업중 해결해야하는 문제점 */



function tab_func(){
	var btnIndex = $(this).index(), // 클릭된 버튼의 인덱스를 저장한다
		tabBtn = $('.tab_btn'), // 탭 버튼 트래킹
		tabCon = $('.tab_con'); // 탭 컨텐츠 트래킹

	tabBtn.find('.on').removeClass('on'); // 버튼의 on 을 찾아 삭제한다
	tabCon.find('.on').removeClass('on'); // 내용의 on 을 찾아 삭제한다
	tabBtn.children().eq(btnIndex).addClass('on'); //버튼을 인덱스 번째의 엘리먼트에 on 을 추가한다
	tabCon.children().eq(btnIndex).addClass('on'); //컨텐츠의 인덱스 번째의 엘리먼트에 on 을 추가한다

	return false; // 기본 동작 리셋

}//ipt_func


$('.tab_btn a').on('click',tab_func);



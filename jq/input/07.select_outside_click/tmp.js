/* 목적 */
// 커스텀한 select 박스의 열리고 닫히는 기능 추가

/* 필요 핵심 기능 */
// 선택시 active 클래스 추가로 선택 목록 노출
// 선택목록은  목록을 선택할경우 닫히게 되며 active 클래스 제거
// 선택 목록 외에 다른 영역을 클릭시 active 클래스 제거


/* 알고리즘 */
//
//
//
//
//
//
//
//
//

$('.select a').on('click', function (){
    $('.select_box').toggleClass('active');



    $(window).on('click', function (){
        $('.select_box').toggleClass('active');

        $(window).off('click')

        console.log('window_click');

    });

    console.log('a_실행');

    return false;
});
















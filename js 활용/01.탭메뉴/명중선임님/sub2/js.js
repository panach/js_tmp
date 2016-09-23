
// 이전걸 보셨다면 이번에는 엘리먼트에 사용자 정의 속성 (data-뭐시깽이) 을 삽입하지 앟고 js 에서 정의해버리는 방법입니다.
// 실제 이방법을 사용하라는 권고가 있으며 엘리먼트에 접근할수 없는 상황에서도 사용가능합니다.

var a = document.getElementsByTagName('a');

for(var i = 0; i < a.length;){

    a[i].dataset.ta = 'test_' + i;
    // dataset.사용자 속성을 설정 할수 있다. 실제 엘리먼트에 data-ta 가 삽입된다
    // = 'test_' + i;  이과정은 dataset.ta 에서 ta 에 속성값을 담는 과정이다.

    a[i].addEventListener('click', 함수);
    ++i;
}

function 함수() {
    console.log(this.dataset.ta);
}



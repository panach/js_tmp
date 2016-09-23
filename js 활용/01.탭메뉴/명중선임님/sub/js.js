
// 불러오고 싶은 엘리먼트를 꼬십니다.
var a = document.getElementsByTagName('a');
    // class 나 TagName 으로 엘리먼트를 불러올경우 복수 이기 때문에 그냥 배열로 받아 오게 됩니다.
    // a 를 콘솔로 찍어보면 아래와 같이 나옵니다.
    // [a, a, a, a, a, a]
    // 우린 불러온 엘리먼트에 이벤트를 걸어야 합니다. 네 ...전부 에게 모두!
    // 이럴때 쓰라고 반복문이 있지요

for(var i = 0; i < a.length;){ // 반복문을 걸어줍니다. i 는 횟수  a.length 는 한계치를
    // a 배열의 index 는 0 부터 시작 합니다. 0~5
    // a.lenght 는 1부터 갯수를 세게 됩니다. 1~6


    a[i].addEventListener('click', 함수); // 이벤트를 a 갯수만큼 걸어줍니다.  클릭하면 '함수' 를 호출

    ++i;
}

function 함수() {

    console.log(this.getAttribute('data-num'));
    //this 는 a[i] 의 event 로 이 함수를  불러 왔기 때문에  지금 클릭된 엘리먼트를  지칭합니다.
    //getAttribute 는 마크업에서 속성으로 찾아줍니다.  data-* 는 사용자 속성이기에 접근이 가능합니다.
    // data-num 의 경우  data- 는 동일하게 적고 뒤에 num 부분을 사용자가 임의로 적어줄수 있어 다수의 갯수를 다양한 옵션으로 설정할수 있습니다.
    // 예를 들어 data-a-a-a='속성' 이런식으로 사용도 가능합니다.


    console.log(this.dataset.num);
    // data 에 접근하는 방법중에는 위에 처럼  dataset.속성  을 적어주는것도 가능합니다.
    // 정석이기도 하니 연습해두시는것도 좋습니다.

}



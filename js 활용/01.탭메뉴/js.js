
function addEvent(element, event_name, func) {
    var test_num = null; // 무언갈 담을텐가?!

    console.log(element.addEventListener);
    console.log(element.attachEvent);
    
    if (element.addEventListener) { // addEventListener
        element.addEventListener(event_name, func, false);
    } else if (element.attachEvent)  {
        element.attachEvent("on"+event_name, func);
    }

// 참조 http://my-recipe.tistory.com/entry/JavaScript-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%95%B8%EB%93%A4%EB%A7%81-%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80

}

function boxClicker() {
    var children = this.parentNode.childNodes,
        num = 0;
    console.log(this);
    for (var i = 1; i < children.length; ) { // 이전에 걸려있던 효과 처기화
        console.log(i);
        children[i].style.color = '';
        i += 2;
    }

    for (var i=0; i<children.length; i++) { // 클릭된 엘리먼트를 찾는다
        if (children[i] == this){
            children[i].style.color = 'red';
            test_num = i;
            return num;
        }
        if (children[i].nodeType == 1){
            num++;
        }
    }
    return -1;
}


window.onload = function (){
    var x = document.getElementById('menu').childNodes; // 배열로 받으나  엘리먼트와 컨텐츠를 같이 받아온다
    for (var i = 1; i < x.length;) { //i 가 1로 시작하는 이유는 배열에 text(마크업에서는 ul 다음에 오는 엔터) 에 이벤트를 주고 싶지 않기 때문이다.
        addEvent(x[i], 'click', boxClicker); // addEvent 라는 함수를 호출하여 3개의 값을 인자로 던진다
        /*
        * x[i] 몇번째 배열의 값. 즉 클릭 이벤트 대상
        * 'click' 어떤 이벤트
        * boxClicker 함수명
        */
        i += 2; // i를 2증가 시킨다.
    }
}


	// 무한 롤링 만들기
	// 1.조건
	// 2.알고리즘
	// 3.이슈/버전업
	// 4.구현에 필요한 재료
	// 5.퍼포먼스/장단점


	//1.조건
		//이미지가 무란 롤링 되어야 한다.
		//오른쪽에서 왼쪽으로
		//2초마다
		//이미지는 무한으로 늘어 날수 있으면 첫로딩시 처음 보이는 이미지를 이미지1 이라고 지칭한다
		//첫번째 이벤트 발생시 이미지 1은 오른쪽에서 왼쪽으로 이동한다.
		//보여지는 영역(영역A라고 지칭) 에서 벗어나 왼쪽 보이지 않는 영역에 위치한다

		//두번째 이벤트 발생시 이미지1은 더이상 왼쪽으로 이동하지 않으며 나열된 이미지의 맨뒤(오른쪽)로 이동하게 된다.
		//이미지 2는 오른쪽에서 왼쪽으로 이동하여 이미지1의 자리에 위치하게 된다

		//세번째 이벤트 발생시 이벤트 2를 반복하여 이미지를 이동시킨다



	//2-1. 알고리즘 1번
		//배열에 좌표값을 변경하여 이미지의 좌표값을 배열의 값들로 매칭하는 방법

		//필요 좌표값을 구한다.
		//이미지 넓이가 300 이라고 가정
		//보여지는 영역의 넓이 300, 이미지의 넓이도 300
		//첫 로딩시에는 이미지1번 의 좌표는 left:0 으로 산정
		//배열로 left 좌표값을 가져온다.
		//기준은 -300 부터 보여지는 영역인 0 오른쪽 대기 중인 300 그리고 나열된 이미지 갯수 만큼 죽~
		//배열에 좌표를 나열했으면
		//매 이벤트 마다  맨앞에 있는 좌표를 임시 저장하여 배열을 한칸씩 앞으로 당기고 임시저장했던 값을 배열의 맨뒤에 저장시킨다
		//그리고 이미지와 배열의 좌표값을 매칭시킨다
		//무한 반복!!!


	//2-2. 알고리즘 2번
		//각 이미지의 좌표값을 이미지/영역A 만큼 뺀다
		//이미지의 좌표가 한계치 보다 작아지면  이미지의 맨뒤로 좌표값을 바꿔버린다

		//이미지 의 현재 포지션을 숫자로 받아 온다.
		//받아온 값에 이미지/영역 A 를 뺀다.
		//해당값을 한계치보다 작은지 큰지 확인 > 작으면 이미지의 맨뒤로 보낸다.
		//크면 그냥 이미지의 좌표로 정의하여 이미지를 이동시킨다

	// 참고
	// 속성 받아오기
	// http://stackoverflow.com/questions/13778439/how-to-get-the-css-left-property-value-of-a-div-using-javascript
	// 배열 메소드
	// unshift	: 배열 맨앞에 삽입
	// push	: 배열 맨뒤에 삽입
	// shift	: 배열 맨앞에 잘라내기
	// pop		: 배열 맨뒤에 잘라내기



function log(){
	console.log("total arguments : "+arguments.length);
	console.log(arguments);
}

window.onload = function(){ //웹의 모든 이미지와 css 가 로딩 되면 실행

	var photoBox = { // 필요한 너와나의 연결고리
			target : $(".photo_box"), //보여질 공간
			size : $(".photo_box").outerWidth(), // 보여질 공간의 넓이
			li : $(".photo_box ul li"), //나열된.움직일 요소
			position : [] // 움질일 요소의 좌표값을 가질
		};

	for(var i = 0, j=2; i < photoBox.li.length;i++, j--){
		/*
			i 는 단순 li 의 갯수 만큼을 체크
			j 는 보여질 이미지의 왼쪽 - 값을 가지는 좌표를 구하기 위해 필요 자세한 설명은 @1
		*/
		photoBox.position[i] = photoBox.size - (photoBox.size*j) //@1
		// photoBox.position[i]
		// 배열 에 순서 대로 다음값을 담는다
		// photoBox.size - (photoBox.size*j)
		// 현재 넓이 빼기 (현재넓이 *2)
		// 빼기 값이므로 뒤에 나오는 현재 넓이 * j 의 j 값이 음수가 되어도 배열에는 양수값이 증가되며 저장

		photoBox.li.eq(i).css({"left":photoBox.position[i]+"px", "z-index":1});
		// 위 배열의 값을 로딩되면 바로 적용 시킨다
		// z-iindex 는 1로 초기화 한다

	}

	function imgMove(){

		//배열의 앞의 값을 맨뒤로 보낸다
		//var temp = photoBox.position[0]; //맨앞에 값을 임시로 저장
		//photoBox.position.shift(); // 배열 맨앞의 값을 삭제
		//photoBox.position.pusg(temp); // 임시 저장했던 값을 맨뒤에 삽입
		// 위방법을 쓰게 되면 이미지가 왼쪽에서 오른쪽으로 가게 된다!!
		// 뒤집기 위해선 뒤에값을 앞으로!

		var temp = photoBox.position[photoBox.position.length-1]; //맨뒤 값을 임시 저장
		photoBox.position.pop(); // 맨뒤값을 잘라낸다
		photoBox.position.unshift(temp); // 임시저장한 맨뒤값을 맨앞에 삽입

		for(var i = 0; i < photoBox.li.length;i++){ // 움직이는 대상의 숫자만큼
			if(photoBox.position[i] > 0){ // 배열의 좌표값을 가져올때 0 보다 크면
				photoBox.li.eq(i).css({"left":photoBox.position[i] +"px","z-index": 1}); //배열의 값을 좌표로 대입하고 ! z-index 를 다른 값들보다 나춘다
			}else{

				//photoBox.li.eq(i).css({"left":photoBox.position[i] +"px", "z-index": 2});
				// 그외 것들은 z-index 를 높인다
				//css transition 으로 부드러운 모션을 구현한다.
				// 하지만 하위브라우저 대응으로 사용할수 없다.
				// 그래서 transition 보다 animate 로 변경하였다. 아래코드를 보자

				photoBox.li.eq(i).css({"z-index": 2}); // 그외 것들은 z-index 를 높인다
				photoBox.li.eq(i).animate({"left":photoBox.position[i] +"px"}, 200);//애니메이션으로 이동시킨다

			}
		}
	}

	setInterval(function(){
		imgMove();
	}, 2200);
	// 2초 마다 imgMove 실행, 나머지 시간은 animate 동작 시간


	// 문제점1. 나열된 이미지의 순서
	// 배열을 만들때 맨앞의 수를 0 이 아닌 -3으로 작성하여 첫번째 이미지가 - 좌표를 가지며 2번이 보여지는 공간에 자리 한다
	// 다음 버전을 참고 하자

}

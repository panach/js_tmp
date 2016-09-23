

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

window.onload = function(){

	var photoBox = {
			target : $(".photo_box"),
			size : $(".photo_box").outerWidth(),
			li : $(".photo_box ul li"),
			position : []
		};


	function reset(){
		// 문제 해결은 배열에 뒤에 한자리를 더 담고
		// 첫번째에 이미지 매치를 할때 배열[0] 이 아닌 배열 [1] 부터 받아와서
		// left 를 입력한후 더이상 쓸모 없어진 맨마지막 자리를 잘라버리면
		// 그 다음 롤링 부터는 정산적으로 배열 [0] 부터 받아오고
		// 매칭 후에 배열을 섞는것이다.
		// 배열을 섞은다음 매칭 시켰던 방식이 아니고  반대로 매칭 시키고 배열을 섞는것이다.

		// for 문을 두개로 나눈 이유는 배열 0 번이 삽입될때 매칭을 같이하게 되면 아직 배열에 정의 되지 않은 배열[1] 번을 가져 와야 하므로
		// 배열이 전부 정의 된후에 이미지 매치를 시키고자 함이다
		for(var i = 0, j=2; i < photoBox.li.length +1;i++, j--){
			//photoBox.li.length +1 위 코드에서 +1 이 된 이유는 처음 사용되는 맨마지막 자리가 필요하기 때문이다
			// 배열은 0 부터 시작하지만 페이지가 로딩될때
			// 이미지나열은 배열 1 부터 적용시킬 것이므로.

			photoBox.position[i] = photoBox.size - (photoBox.size*j)
		}

		for(var i = 0, j=1; i < photoBox.li.length;i++, j++){
			photoBox.li.eq(i).css({"left":photoBox.position[j]+"px", "z-index":1});
			// j 를 1로 설정하여 배열의 1번 부터 가져와서 이미지와 매칭 시킨다
		}
		photoBox.position.pop();
		// 매치 시켰다면 이제 필요 없어진 배열의 마지막을 잘라버린다.
		// 버리지 않으면 차후 일어날 이벤트에 영향을 미친다
		console.log(photoBox.position);
	}



	function imgMove(){

		for(var i = 0; i < photoBox.li.length;i++){
			if(photoBox.position[i] > 0){
				photoBox.li.eq(i).css({"left":photoBox.position[i] +"px","z-index": 1});
			}else{
				photoBox.li.eq(i).css({"z-index": 2});
				photoBox.li.eq(i).animate({"left":photoBox.position[i] +"px"}, 200);
			}
		}
		var temp = photoBox.position[photoBox.position.length-1];
		photoBox.position.pop();
		photoBox.position.unshift(temp);
	}

	reset();
	setInterval(function(){
		imgMove();
	}, 2200);


}

/*
* tag : 엘리먼트 텍스트 저장
*
*
*
*
*
*
*	@ 기능 구현 필요 ------------------------------
*	@ 엘리먼트 추가시 input 으로 갈지 textarea 로 하여 줄넘김을 갈지  contenteditable 로 가면 대신 줄넘김을 div 에서 br 로 수정해야 한다
*	@ li 계속 추가후에 종료 시점을 체크해야 한다 그시점에서 ul 을 닫는다
*	@ a 태그 top/left/width/height 등의 속성제어를 어떻게 할것인가
*		ㄴ 동시에 중앙에서 밀경우에 대비는 어떻게 할것인가
* ? 1013 텍스트 입력칸의 heading 과 li 가 들여쓰기가 되어야 하는가??
*	V 버전 관련 -----------------------------------
*	a 테그에 대한 인풋칸  몇개가 필요한가
*	href / alt / target / 드래그에 필요한 id ? class?
*
*
*/



var tag = {
		h1 : ['<h1>','</h1>'],
		h2 : ['<h2>','</h2>'],
		h3 : ['<h3>','</h3>'],
		h4 : ['<h4>','</h4>'],
		h5 : ['<h5>','</h5>'],
		h6 : ['<h6>','</h6>'],
		p : ['<p>','</p>'],
		ul : ['<ul>','</ul>'],
		li : ['<li>','</li>'],
		a : ['<a href="', '" target="', '" title="', '">'] // func 로 변경하럿
	},
	input_list = []; // 굳이 필요 한가

add_line.ul_status = false; // 열려있음 : ture , 닫힘 false 외부로 뺀이유는 독립성을 위해

function add_line(element) {
	var targetarea = $('.add_input'); // 입력 input 이 추가될 영역
	var tmpClass = 'line_' + input_list.length; // 기본 클래스명

	this.element_label = function (){
		if (element == 'li') { // li 일때 marginleft 이란 클래스 추가
			tmpClass = 'line_' + input_list.length + ' marginleft';
		}
		console.log(input_list.length);
		return '<div class="' + tmpClass + '"><label for="input_' + input_list.length + '">' + element + '</label> <input type="text" id="input_' + input_list.length + '"> '; // 입력상자와 label 조합
	};
	this.element_label2 = function (){
		console.log('test----');
	};
	
	this.add_line_li = function () {
		console.log('test');
	}
	if (element == 'li') { // li 일때
		if (!this.ul_status) { // ul 열려 있지 않음
			input_list.push('ul', 'li'); // 추가순서
			targetarea.append('<p class="t_list">ul</p>');
			this.ul_status = true;
			// console.log(this.ul_status);
		}
		targetarea.append(element_label); //입력상자에 추가
		// ul_status = false;
		
	} else {
		
		if (this.ul_status) { // 열려 있으면 닫기
			this.ul_status = false;
		}
		
		if ( element == 'a' ) { // 그외
			input_list.push('a'); // 추가순서
			targetarea.append(element_label2); //입력상자에 추가
			
		} else { // 해딩 + p 에 대한 내용
			input_list.push(element); // 추가순서
			targetarea.append(element_label); //입력상자에 추가
		}
	}

	// input_list.push(element); // 추가순서
	// targetarea.append(element_label); //입력상자에 추가
	// console.log(input_list.length, input_list);
}

function middle_line() {
	
}


$('.add').on('mouseup', function () {
	var text = $(this).html();
	switch (text) {
		case 'a': // a 버튼은 다른 행동 필요
			console.log('aaaaa');
			add_line('a');
			break;
		case 'ul &gt; li': // ul li 관계를 정리하여야 하므로 다른 행동필요
			console.log('lilili');
			add_line('li')
			break;
		default: // a, li 이외에 무조건 엘리먼트 추가
			add_line(text);
			break;
	}
	// console.log(text);
});




// 이미지 업로드 참조 코드
//http://jsfiddle.net/PuneetChawla/vqn7r0nj/

/*
<input type='file' id='getval' name="background-image" onchange="readURL(event)" /><br/><br/>
<div id='clock'></div>

function readURL(event){
var getImagePath = URL.createObjectURL(event.target.files[0]);
$('#clock').css('background-image', 'url(' + getImagePath + ')');
}
*/





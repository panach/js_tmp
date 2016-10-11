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
*	V 버전 관련 -----------------------------------
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
	input_list = []; // 궁이 필요 한가

function new_line(element) {
	var targetarea = $('.add_input'),
		// element_text = tag[element][0] + 'test' + tag[element][1];
		element_label = '<div class="line_' + input_list.length + '"><label for="input_' + input_list.length + '">' + element + '</label> <input type="text" id="input_' + input_list.length + '"> ';
	
	input_list.push(element);
	// targetarea.append(element_label)
	targetarea.append(element_label);
	
	console.log(input_list);
	
}


function middle_line() {
	
}


$('.add').on('mouseup', function () {
	var text = $(this).html();
	switch (text) {
		case 'a': // a 버튼은 다른 행동 필요
			console.log('aaaaa');
			new_line(a);
			break;
		case 'ul &gt; li': // ul li 관계를 정리하여야 하므로 다른 행동필요
			console.log('lilili');
			new_line(li)
			break;
		default: // a, li 이외에 무조건 엘리먼트 추가
			new_line(text);
			break;
	}
	// console.log(text);
});




/* 목적 */
// 하위 브라우저에서 label 을 이용하여 placeholder 를 대신할수 있도록 한다

/* 필요 핵심 기능 */
// 1. 엘리먼트내에 텍스트 유무 확인
// 2. label의 숨김 처리
// 3. 1번에 상황에 따른  label 숨김 처리 취소
// 4. 포커스에 대한 처리 (탭이동시)

/* 알고리즘 */
// 1. 라벨의 클릭 이벤트를 만든다
// 2. 클릭 이벤트에 함수(ipt_func)를 호출한다
// 3. ipt_func 에서 할일
// 3-1. 라벨을 숨긴다
// 3-2. label 클릭일때 포커스를 input 에 이동 시킨다
// 3-3. 3-2는 label 의 기본 동작을 막았가 때문이다 이를 하지 않으면 이벤트가 2번 걸린다. 버블링
// 3-4. focusout 일때 input 의 값이 비어있는지 차있는지에 따라 label 을 숨김해제할것인지 계속 숨김처리할것인지 분기처리 한다
// 3-5. 3번을 구성하며 필요한 변수를 정리 한다.(이벤트 하위 브라우저호환성, 이벤트의 부모요소, 인풋의 텍스트, 라벨의 트래킹)

/* 자업중 해결해야하는 문제점 */
// label 클릭시 기본 속성으로 인해 이벤트가 2개 발생한다
// label의 클릭
// input 의 focusin
// input 에 스페이스바로 값이 들어갈 경우 텍스트로 인식하게 된다



(function($) {
	$.fn.ellipsis = function()
	{
		return this.each(function()
		{
			var el = $(this);

			if(el.css("overflow") == "hidden")
			{
				var text = el.html();
				var multiline = el.hasClass('multiline');
				var t = $(this.cloneNode(true))
					.hide()
					.css('position', 'absolute')
					.css('overflow', 'visible')
					.width(multiline ? el.width() : 'auto')
					.height(multiline ? 'auto' : el.height())
					;

				console.log(t);

				el.after(t);

				function height() { return t.height() > el.height(); };
				function width() { return t.width() > el.width(); };

				var func = multiline ? height : width;

				while (text.length > 0 && func())
				{
					text = text.substr(0, text.length - 1);
					t.html(text + "...");
				}

				el.html(t.html());
				t.remove();
			}
		});
	};
})(jQuery);


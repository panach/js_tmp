
/*기본 동작*/
/*function ipt_ckb(event){
	var a = $(this).attr('for'),
		b = $('#'+a).attr('checked'),
		lastIndex = $(this).index(this);

	console.log(lastIndex);

//	console.log(event.shiftKey);

	if(b == undefined){
		$(this).addClass('active');
		$('#'+a).attr('checked', true);
	}else{
		$(this).removeClass('active');
		$('#'+a).removeAttr('checked');
	};

};*/

//$('.ipt_ckb').on('click',ipt_ckb);


//엘리먼트를 배열로 담고
//내가 클릭한것과 배열에 담긴것을 비교한다(inArray)
//그리고 동일하다면 배열의 인덱스값을 이용하여 순서를 리턴받는다
//문제는 배열에 담긴 엘리먼트가 동일한 값을 가진것이 있을때따
//index() 값을 같이 담아서 비교하는것은 어떨까??


$('.codeViewBox label').click(function() {
  var self   = $(this),
	  index  = self.eq();

  console.log(index);
	console.log($('.codeViewBox label').eq(index));
});


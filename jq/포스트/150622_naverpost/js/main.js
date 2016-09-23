var slide = {
	winWidth : $(".t_stroy").outerWidth(),
	tabName : "tip_theme",
	tabIndex : 0,
	indicatorIndex : 0,
	tabLength : 2,
	indiLength : 0,
	tabSwitch : function(){
		switch (slide.tabIndex){
			case 0 :
				slide.tabName = "tip_theme";
				break;
			case 1 :
				slide.tabName = "tip_con";
				break;
			case 2 :
				slide.tabName = "tip_design";
				break;
		}
		console.log("switch 실행 : "+slide.tabName);
	},
	autoPlay : ""
	};

function bgMotion(){
	$(".bg_section ul").stop();
	var leftVal = slide.tabIndex*slide.winWidth,
		insidLeftVal = slide.indicatorIndex*slide.winWidth;
	$(".bg_section ul").animate({"left":-1*leftVal}, 200);
	$(".bg_section .v"+(slide.tabIndex+1)+" .contain").animate({"left":-1*insidLeftVal}, 200);
}
function conMotion(){
	$("."+slide.tabName+" .phone_box ul").stop();
	$("."+slide.tabName+" .phone_box ul").animate({"left":(-1*slide.indicatorIndex*280)+"px"},{ duration : 200 });
	$("."+slide.tabName+" .text_box li").hide();
	$("."+slide.tabName+" .text_box li").eq(slide.indicatorIndex).show();
	$("."+slide.tabName+" .indicator li").removeClass("on");
	$("."+slide.tabName+" .indicator li").eq(slide.indicatorIndex).addClass("on");
}
function testTool(){
	console.clear();
	//console.log("winWidth : "+slide.winWidth);
	console.log("tabIndex : "+slide.tabIndex);
	//console.log("tabName : "+slide.tabName);
	console.log("indicatorIndex : "+slide.indicatorIndex);
	console.log('$(".navi li").length : '+$(".navi li").length)
}



function ticktok(){

	slide.indiLength = $("."+slide.tabName+" .indicator li").length;

	if(slide.indicatorIndex < slide.indiLength-1){
		slide.indicatorIndex++;
		console.log("A 실행");
	}else{
		slide.tabIndex++;
		slide.indicatorIndex = 0;
		console.log("B 실행");
	}
	if(slide.tabIndex > slide.tabLength){
		slide.tabIndex = 0;
		slide.indicatorIndex = 0;
		console.log("C 실행");
	}

	var tempClass = "v"+(slide.tabIndex+1);
	$(".t_stroy").removeClass("v1 v2 v3");
	$(".bg_section .contain").css({"left":0});
	$(".t_stroy").addClass(tempClass);

	slide.tabSwitch();
	bgMotion();
	conMotion();
	console.log("------------------------------------------------ticktok");
	//testTool();

} //ticktok



window.onload = function(){
	console.log("onload");
	slide.tabSwitch();

	$(".navi li a").on("click", function(){ // tab 클릭
		slide.tabIndex = $(this).parent().index();

		var tempClass = "v"+(slide.tabIndex+1);
		$(".t_stroy").removeClass("v1 v2 v3");
		$(".t_stroy").addClass(tempClass);

		$("li."+tempClass+" .bg_section .contain").css({"left":0});

		slide.tabSwitch();
		slide.indicatorIndex = 0;

		bgMotion();
		conMotion();
		testTool();

		return false;
	});

	$(".indicator li").on("click", function(){ //인디케이터 클릭
		slide.tabName = $(this).parent().parent().parent().attr("class"),
		slide.indicatorIndex = $(this).index();
		bgMotion();
		conMotion();
		testTool();
		return false;
	});

	$(".now_show").on("click", function(){ //하단 셀렉트 클릭
		$(".his_now").toggleClass("on");
		$(window).bind("click",function(){
			$(".his_now").toggleClass("on");
			$(window).unbind("click");
		});
		return false;
	});

	$(".hd_con").bind("click", function(e){ // 상단 클릭시 위로
		if(e.target.tagName == "DIV"){
			$("html, body").animate({scrollTop:0}, 300)
		}
	});

	/**
	slide.autoPlay = setInterval("ticktok()", 4000);
	/**/

} // onload

$(window).resize(function(){
	console.log("resize");
	slide.winWidth = $(".t_stroy").outerWidth();
	bgMotion();
	testTool();

}); //resize

window.onscroll = function(){
	var a = window.pageYOffset;
	if( a >= 800){
		$(".btn_wrt").stop();
		$(".btn_wrt").css({"display":"block"});
		$(".btn_wrt").animate({"opacity":"1"}, 300);
	}else{
		$(".btn_wrt").stop();
		$(".btn_wrt").css({"display":"none"});
		$(".btn_wrt").animate({"opacity":"0"}, 300);
	}
} //onscroll


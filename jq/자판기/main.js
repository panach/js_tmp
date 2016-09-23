window.onload = function(){
	console.log('test');



}




/*
// 체크한 품목의 합계를 표시
 // 3자릿수마다 컴마를 찍어주는데 계산할때는 컴마를 지워주고 형변환해서 계산한뒤 다시 컴마를 붙여서 출력
 // 컴마추가 : Format_comma, 컴마제거 : Format_NoComma
//-----------------------------------------------------------------------------------------------
 function sum_price(obj, price){
  var sum
  if(obj.checked == true){
   sum = parseInt(Format_NoComma(frm.sum.value))+parseInt(price);
  }else{
   sum = parseInt(Format_NoComma(frm.sum.value))-parseInt(price);
  }
  frm.sum.value = Format_comma(sum);
 }

//-----------------------------------------------------------------------------------------------
// 숫자에 3자리마다 콤마찍기(현금표시)
//-----------------------------------------------------------------------------------------------
 function Format_comma(val1){
  var newValue = val1+""; //숫자를 문자열로 변환
  var len = newValue.length;
  var ch="";
  var j=1;
  var formatValue="";

  // 콤마제거
  newValue = newValue.replace(/\,/gi, ' ');

  // comma제거된 문자열 길이
  len = newValue.length;

  for(i=len ; i>0 ; i--){
   ch = newValue.substring(i-1,i);
   formatValue = ch + formatValue;
   if ((j%3) == 0 && i>1 ){
	formatValue=","+formatValue;
   }
   j++
  }
  return formatValue;
 }

//-----------------------------------------------------------------------------------------------
// 콤마제거
//-----------------------------------------------------------------------------------------------
 function Format_NoComma(val1){
  return (val1+"").replace(/\,/gi, '');
 }
*/

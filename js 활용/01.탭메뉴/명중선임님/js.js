
// html에 아무것도 안넣고 바꾸고 싶음...
function t(val){ // 값을 가져와라~~~
  // 탭메뉴 6개 갯수에 따라 수정~~~
  for (i=0; i<6; i++) {
    var tab = document.getElementById('con_' + i); // id값 + 탭메뉴 체킹
    if (i != val) tab.style.display = "none"; // 아닌거는 다 꺼버려~
    else tab.style.display = "block"; // 맞으면 뿅!!~~~
  }
}
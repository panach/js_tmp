var total = 190 * Math.PI,
    buttons = document.querySelector('.buttons'),
    pie = document.querySelector('.pie'),
    activeClass = 'active';

var continents = {
  aa: 6,
  bb : 300,
  cc: 200,
  dd: 40,
  ee: 560,
  ff: 500
};
var cont2 = 40;

console.log(total);

// 총갯수 / 지금 갯수 퍼센트 변환
var numberFixer = function(num){
  var sum = (num / (cont2 + num)) * 100; // 두값의 합에서  한값의 비율(%) 만구함
  var result = (sum / 100) * total; // 원의 총길이에서  위  % 만큼 길이의 px 값을 구함
  
  return result;
}

// 버튼 갯수별로 만들기
for(property in continents){
  var newEl = document.createElement('button');
  newEl.innerText = property;
  newEl.setAttribute('data-name', property);
  buttons.appendChild(newEl);
  console.log(property);
}

// 버튼 클릭시 piechart 속성 변경
  buttons.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
      var el = e.target,
          name = el.getAttribute('data-name');
      setPieChart(name);
      setActiveClass(el);
    }
    e.stopPropagation();
  });

var setPieChart = function(name){ // 내부 원에 대한 셋
  var number = continents[name], // 객체에서 해당 이름의 숫자값을 불러온다
      fixedNumber = numberFixer(number), //위에서 가져온앖을 퍼센트로 변환
      result = fixedNumber + ' ' + total; // 변환한 값  과 총값을 이용해   숫자 숫자  와 같은 형태로 가공한다
  pie.style.strokeDasharray = result; // 가공한 값을 circle 의 stroke-dasharray 속성의 속성값으로 전달한다
}

var setActiveClass = function(el) {
  for(var i = 0; i < buttons.children.length; i++) {
    buttons.children[i].classList.remove(activeClass);
    el.classList.add(activeClass);
  }
}

// Set up default settings
setPieChart('asia');
setActiveClass(buttons.children[0]);




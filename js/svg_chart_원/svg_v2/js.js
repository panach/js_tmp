var total = 160 * Math.PI,
    pie = document.querySelector('.plugin-num .pie'),
    pie2 = document.querySelector('.sales-num .pie');

var numberFixer = function(charge, free){
  console.log('charge', charge);
  console.log('free', free);
  console.log('charge + free', charge + free);
  
  var sum = (charge / (charge + free)) * 100;
  var result = (sum / 100) * total;
  return result;
}

var setPieChart = function(target){
  var free = Number(target.dataset.free),
      charge = Number(target.dataset.charge),
      fixedNumber = numberFixer(charge, free),
      result = fixedNumber + ' ' + total;
  target.style.strokeDasharray = result;
}

window.onload = function() {
  setPieChart(pie);
  setPieChart(pie2);
  
}


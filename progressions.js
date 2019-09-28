var dateObj = new Date();
var first = new Date(dateObj.getFullYear(), 0, 1);
var seconds = dateObj.getSeconds();
var secondsleft = 60 - dateObj.getSeconds();
var minutes = dateObj.getMinutes();
var heures = dateObj.getHours();
var days = dateObj.getDay();
var currentmonth = dateObj.getMonth();
var currentyear = dateObj.getFullYear();
var dayinYear = Math.round(((dateObj - first) / 1000 / 60 / 60 / 24) + .5, 0);
var decadecalc = Math.trunc(currentyear / 10);
var decadepos = Number(((currentyear / 10)-decadecalc).toFixed(2));
var centurycalc = Math.trunc(currentyear / 100);
var centurypos = Number(((currentyear / 100)-centurycalc).toFixed(2));




function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}

window.setInterval(function(){
  dateObj = new Date();
  //Seconds
  seconds = dateObj.getSeconds();
  document.getElementById('Secondes').value = seconds;
  secondsleft = 60 - dateObj.getSeconds();
  document.getElementById('secondesRestante').innerHTML = secondsleft;
  //Minutes
  minutes = dateObj.getMinutes();
  document.getElementById('Minutes').value = minutes;
  minleft = 60 - minutes;
  document.getElementById('minRestante').innerHTML = minleft;

  //Heures
  heures = dateObj.getHours();
  document.getElementById('Heures').value = heures;
  heurleft = 24 - heures;
  document.getElementById('heurRestante').innerHTML = heurleft;

  //Days
  days = dateObj.getDay();
  document.getElementById('Days').value = days;
  daysleft = 7 - days;
  document.getElementById('DaysLeft').innerHTML = daysleft;

  //Months
  daysMonth = dateObj.getDate();
  currentmonth = dateObj.getMonth() + 1;
  currentyear = dateObj.getFullYear();
  document.getElementById('DaysMonth').value = daysMonth;
  daysMonthLeft = daysInMonth(currentmonth, currentyear) - daysMonth;
  document.getElementById('DaysMonthLeft').innerHTML = daysMonthLeft;

  //Years
  dayinYear = Math.round(((dateObj - first) / 1000 / 60 / 60 / 24) + .5, 0);
  document.getElementById('DaysYear').value = dayinYear;
  dayyearleft = 366 - dayinYear;
  document.getElementById('DaysYearLeft').innerHTML = dayyearleft;

  //Decennie
  decadecalc = Math.trunc(currentyear / 10);
  decadepos = Number(((currentyear / 10)-decadecalc).toFixed(2));
  document.getElementById('YearsDecade').value = decadepos;
  yearsDecadeLeft = 10 - (decadepos*10);
  document.getElementById('YearsLeftDecade').innerHTML = yearsDecadeLeft;

  //Siecle
  century = 100 - (2100 - currentyear)
  document.getElementById('YearsCentury').value = century;
  yearsCenturyLeft = 2100 - currentyear;
  document.getElementById('YearsLeftCentury').innerHTML = yearsCenturyLeft;

  //Fin de One Piece
  document.getElementById('OnePieceCurrent').value = 4 - (2022 - currentyear);
  document.getElementById('OnePieceLeft').innerHTML = 2022 - currentyear;

  //Andromeda s'ecrase
  andromeda = 4000000000 - (4000000000 - currentyear);
  document.getElementById('Andro').value = andromeda;
  andromedaLeft = 4000000000 - currentyear;
  document.getElementById('AndroLeft').innerHTML = andromedaLeft;

}, 1);



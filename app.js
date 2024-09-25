let number = document.getElementById('number');
let counter = 0;
setInterval(() => {
  if (counter == 55) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + '%';
  }
}, 25);

let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(() => {
  if (counter2 == 65) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + '%';
  }
}, 25);

let number3 = document.getElementById('number3');
let counter3 = 0;
setInterval(() => {
  if (counter3 == 80) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + '%';
  }
}, 25);

let circle = document.getElementById('circle');
circle.style.strokeDashoffset = 450;
setInterval(() => {
  if (circle.style.strokeDashoffset == 202) {
    clearInterval();
  } else {
    circle.style.strokeDashoffset -= 1;
  }
}, 5.5);

let circle2 = document.getElementById('circle-2');
circle2.style.strokeDashoffset = 450;
setInterval(() => {
  if (circle2.style.strokeDashoffset == 157) {
    clearInterval();
  } else {
    circle2.style.strokeDashoffset -= 1;
  }
}, 5.5);

let circle3 = document.getElementById('circle-3');
circle3.style.strokeDashoffset = 450;
setInterval(() => {
  if (circle3.style.strokeDashoffset == 90) {
    clearInterval();
  } else {
    circle3.style.strokeDashoffset -= 1;
  }
}, 5.5);

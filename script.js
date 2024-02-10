const number = document.getElementById('number-js');
const buttonMinus = document.getElementById('button-minus-js');
const buttonPlus = document.getElementById('button-plus-js');
const buttonReset = document.getElementById('button-reset-js');
let counter = 0;

// keeps number html updated when page is refreshed.
if (localStorage.getItem('counter')) {
    number.innerHTML = localStorage.getItem('counter').toString();
}

// When plus button is clicked counter is added by 1.
// Counter value stored in localStorage.
// Then the number html is updated to that amount.
buttonPlus.addEventListener('click', function () {
    counter++;
    localStorage.setItem('counter', counter);
    number.innerHTML = counter.toString();
});

// When minus button is clicked counter is subtracted by 1.
// Counter value stored in localStorage.
// Then the number html is updated to that amount.
buttonMinus.addEventListener('click', function () {
    counter--;
    localStorage.setItem('counter', counter);
    number.innerHTML = counter.toString();
});

// When reset button is clicked counter is equal to 0.
// ounter value stored in localStorage.
// Then the number html is updated to that amount.
buttonReset.addEventListener('click', function () {
    counter = 0;
    localStorage.setItem('counter', counter);
    number.innerHTML = counter.toString();
});
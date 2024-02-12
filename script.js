const number = document.getElementById('number-js');
const buttonMinus = document.getElementById('button-minus-js');
const buttonPlus = document.getElementById('button-plus-js');
const buttonReset = document.getElementById('button-reset-js');
let counter = 0;
let audio;


// keeps number html updated when page is refreshed.
if (localStorage.getItem('counter')) {
    number.innerHTML = localStorage.getItem('counter').toString();
}
// function to play audio
function playSound(name) {
    audio = new Audio('sounds/' + name + '.mp3');
    audio.volume = 0.1;
    audio.play();
}

// When plus button is clicked counter is added by 1.
// If statement added to keep track of counter after page refresh.
// Counter value stored in localStorage.
// Plus audio is played.
// Then the number html is updated to that amount.
buttonPlus.addEventListener('click', function () {
    if (localStorage.getItem('counter')) {
        counter = parseInt(localStorage.getItem('counter'));
    }
    counter++;
    localStorage.setItem('counter', counter);
    playSound('plus');
    number.innerHTML = counter.toString();
});

// When minus button is clicked counter is subtracted by 1.
// If statement added to keep track of counter after page refresh.
// Counter value stored in localStorage.
// Minus audio is played.
// Then the number html is updated to that amount.
buttonMinus.addEventListener('click', function () {
    if (localStorage.getItem('counter')) {
        counter = parseInt(localStorage.getItem('counter'));
    }
    counter--;
    playSound('minus');
    number.innerHTML = counter.toString();
    localStorage.setItem('counter', counter);
});

// When reset button is clicked counter is equal to 0.
// If statement added to keep track of counter after page refresh.
// Counter value stored in localStorage.
// Reset audio is played.
// Then the number html is updated to that amount.
buttonReset.addEventListener('click', function () {
    counter = 0;
    playSound('reset');
    number.innerHTML = counter.toString();
    localStorage.setItem('counter', counter);
});

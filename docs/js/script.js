const run = document.getElementById('run');
const counter = document.querySelector('.counter');
const multiplier = document.getElementById('multiplier');
const autoclick = document.getElementById('autoclick');
const timer = document.getElementById('timer');

let count = 0;
let increment = 1;
let multiplierIndex = 2;
let multiplierPrice = 100;

let intervalAC = null;
let intervalT = null;

multiplier.style.display = 'none';
autoclick.style.display = 'none';
timer.style.display = 'none';

run.addEventListener('click', function(){
    count += increment;
    counter.innerHTML = count;
    
    if (count >= ((multiplierPrice * 3) / 4)) {
        timer.style.display = "block";

        if (count >= multiplierPrice) {
            multiplier.style.display = 'block';
        }
    }
});

multiplier.addEventListener('click', function(){
    increment *= multiplierIndex;

    if (count >= multiplierPrice) {
        count -= multiplierPrice;
    }

    counter.innerHTML = count;

    multiplierPrice *= multiplierIndex;

    if (count < ((multiplierPrice * 3) / 4)) {
        timer.style.display = "none";

        if (count < multiplierPrice) {
            multiplier.style.display = 'none';
        }
    }

    multiplierIndex += 1;

    multiplier.innerHTML = `${multiplierPrice} points for multiply by ${multiplierIndex}`

    if (multiplierIndex === 5) {
        autoclick.style.display = "block";
    }
});

autoclick.addEventListener('click', function(){
    clearInterval(intervalAC);
    intervalAC = setInterval(() => {
        run.click();
    }, 10000);
    autoclick.style.display = "none";
})

timer.addEventListener('click', function(){
    let timeRest = 29;

    increment *= 2;

    intervalT = setInterval(() => {
        timer.style.display = 'block';
        timer.innerHTML = `${timeRest} seconds`;
        timeRest -= 1;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalT);
        timer.style.display = 'none';
        increment /= 2;
        timer.innerHTML = `30 seconds`;
    }, 30000);
})
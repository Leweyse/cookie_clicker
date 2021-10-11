const run = document.getElementById('run');
const counter = document.querySelector('.counter');
const multiplier = document.getElementById('multiplier');
const autoclick = document.getElementById('autoclick');
const timer = document.getElementById('timer');
const l_multiplier = document.querySelector('.label_m')
const l_autoclick = document.querySelector('.label_a')
const l_timer = document.querySelector('.label_t')

let count = 0;
let increment = 1;
let multiplierIndex = 2;
let multiplierPrice = 100;

let intervalAC = null;
let intervalT = null;
let settimeoutT = null;

multiplier.style.pointerEvents = 'none';
autoclick.style.pointerEvents = 'none';
timer.style.pointerEvents = 'none';

multiplier.style.opacity = '0.5';
autoclick.style.opacity = '0.5';
timer.style.opacity = '0.5';

run.addEventListener('click', function(){
    count += increment;
    counter.innerHTML = count;
    
    if (count >= ((multiplierPrice * 3) / 4)) {
        timer.style.pointerEvents = "all";
        timer.style.opacity = "1";

        if (count >= multiplierPrice) {
            multiplier.style.pointerEvents = 'all';
            multiplier.style.opacity = "1";
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
        timer.style.pointerEvents = "none";
        timer.style.opacity = '0.5';

        if (count < multiplierPrice) {
            multiplier.style.pointerEvents = 'none';
            multiplier.style.opacity = '0.5';
        }
    }

    multiplierIndex += 1;

    l_multiplier.innerHTML = `${multiplierPrice} points for multiply by ${multiplierIndex}`

    if (multiplierIndex === 5) {
        autoclick.style.pointerEvents = "all";
        autoclick.style.opacity = '1';
    }
});

autoclick.addEventListener('click', function(){
    clearInterval(intervalAC);
    intervalAC = setInterval(() => {
        run.click();
    }, 10000);
    autoclick.style.pointerEvents = "none";
    autoclick.style.opacity = '0.5';
})

timer.addEventListener('click', function(){
    let timeRest = 29;
    increment *= 2;

    clearInterval(intervalT);
    clearTimeout(settimeoutT);

    l_timer.innerHTML = `30 seconds`;

    intervalT = setInterval(() => {
        timer.style.pointerEvents = 'all';
        timer.style.opacity = '1';
        l_timer.innerHTML = `${timeRest} seconds`;
        timeRest -= 1;
    }, 1000);

    settimeoutT = setTimeout(() => {
        clearInterval(intervalT);
        timer.style.pointerEvents = 'none';
        timer.style.opacity = '0.5';
        increment /= 2;
        l_timer.innerHTML = `30 seconds`;
    }, 30000);
})
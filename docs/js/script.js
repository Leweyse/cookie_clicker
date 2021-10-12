const run = document.getElementById('run');
const counter = document.querySelector('.counter');
const multiplier = document.getElementById('multiplier');
const autoclick = document.getElementById('autoclick');
const timer = document.getElementById('timer');
const l_multiplier = document.querySelector('.label_m')
const l_autoclick = document.querySelector('.label_a')
const l_timer = document.querySelector('.label_t')
const aniFlower = document.getElementById('animateFlower')

let count = 0;
let increment = 1;
let multiplierIndex = 2;
let multiplierPrice = 100;
let timerPrice = 75;

let intervalAC = null;
let intervalACT = null;
let settimeoutAC = null;
let intervalT = null;
let settimeoutT = null;

var id = null;
var horizon = document.body.clientWidth;
var vertical = document.body.clientHeight;
let leftPoint = 0;
let topPoint = 0;

clearInterval(id);
id_top = setInterval(frameTop, 5);
function frameTop() {
    if (topPoint == vertical - 80){
        clearInterval(id_top)
        aniFlower.style.display = 'none';
    }else{
        topPoint++;
        aniFlower.style.top = topPoint + 'px';
    }
}
id_left = setInterval(frameLeft, 5);
function frameLeft() {
    if (leftPoint == horizon/2 - 80){
        clearInterval(id);
    }else{
        leftPoint++;
        aniFlower.style.left = leftPoint + 'px'
    }
}


console.log(horizon/2);

multiplier.style.pointerEvents = 'none';
autoclick.style.pointerEvents = 'none';
timer.style.pointerEvents = 'none';

multiplier.style.opacity = '0.4';
autoclick.style.opacity = '0.4';
timer.style.opacity = '0.4';

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

    if (l_timer.innerHTML !== `Get ${timerPrice} points to use bonus`) {
        timer.style.pointerEvents = 'none';
        timer.style.opacity = '0.4';
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
        timer.style.opacity = '0.4';

        if (count < multiplierPrice) {
            multiplier.style.pointerEvents = 'none';
            multiplier.style.opacity = '0.4';
        }
    }

    multiplierIndex += 1;

    l_multiplier.innerHTML = `Use ${multiplierPrice} points to increment by ${multiplierIndex}`
    timerPrice = ((multiplierPrice * 3) / 4);

    if (multiplierIndex === 5) {
        autoclick.style.pointerEvents = "all";
        autoclick.style.opacity = '1';
        l_autoclick.innerHTML = 'Autoclick in 10 seconds';
    }
});

autoclick.addEventListener('click', function(){
    clearInterval(intervalAC);

    let autoclickRest = 9;

    intervalAC = setInterval(() => {
        run.click();
        autoclickRest = 10;
    }, 10000);

    intervalACT = setInterval(() => {
        l_autoclick.innerHTML = `Autoclick in ${autoclickRest} seconds`;
        autoclickRest -= 1;
    }, 1000);

    autoclick.style.pointerEvents = "none";
    autoclick.style.opacity = '0.4';
});

timer.addEventListener('click', function(){
    l_timer.innerHTML = `10 seconds left`;

    timer.style.pointerEvents = 'none';
    timer.style.opacity = '0.4';

    let timeRest = 9;
    increment *= 2;

    clearInterval(intervalT);
    clearTimeout(settimeoutT);

    intervalT = setInterval(() => {
        l_timer.innerHTML = `${timeRest} seconds left`;
        timeRest -= 1;
    }, 1000);

    settimeoutT = setTimeout(() => {
        clearInterval(intervalT);
        increment /= 2;
        l_timer.innerHTML = `Get ${timerPrice} points to use bonus`;

        if (count >= ((multiplierPrice * 3) / 4)) {
            timer.style.pointerEvents = "all";
            timer.style.opacity = "1";
        }
    }, 10000);
});

function checkOpacity (params) {
    params.forEach(elem => {
        if (elem.style.opacity == '0.4') {
            elem.style.animation = 'none';
        } else {
            elem.style.animation = 'imgAnimation 5s infinite'
        }
    })
}

window.requestAnimationFrame(() => {
    setInterval(() => {
        checkOpacity([multiplier, autoclick, timer]);
    }, 100);
})
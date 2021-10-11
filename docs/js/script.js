const run = document.getElementById('run');
const counter = document.querySelector('.counter');
const multiplier = document.getElementById('multiplier');

let count = 0;
let increment = 1;
let multiplierIndex = 2;
let price = 100;

multiplier.style.display = 'none';

run.addEventListener('click', function(){
    count += increment;
    counter.innerHTML = count;

    if (count >= price) {
        multiplier.style.display = 'block';
    }
});

multiplier.addEventListener('click', function(){
    increment *= multiplierIndex;

    if (count >= price) {
        count -= price;
    }

    counter.innerHTML = count;

    price *= multiplierIndex;

    if (count < price) {
        multiplier.style.display = 'none';
    }

    multiplierIndex += 1;

    multiplier.innerHTML = `${price} points for multiply by ${multiplierIndex}`
});
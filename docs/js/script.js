let count = 0;
let increment = 1;

document.getElementById('run').addEventListener('click', function(){
    count += increment;
    console.log(count);
    document.querySelector('.counter').innerHTML = count;
});

document.getElementById('multiplier').addEventListener('click', function(){
    increment *= 2;
    console.log(count);
    document.querySelector('.counter').innerHTML = count;
});
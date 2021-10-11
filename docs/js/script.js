let count = 0;

document.getElementById('run').addEventListener('click', function(){
    count += 1;
    console.log(count);
    document.querySelector('.counter').innerHTML = count;
})
document.getElementById('multiplier').addEventListener('click', function(){
    count *= 2;
    console.log(count);
    document.querySelector('.counter').innerHTML = count;
})
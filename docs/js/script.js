(function(){
    let count = 0;
document.getElementById('run').addEventListener('click', function(){
    count += 1;
    console.log(count);
    document.getElementsByClassName('counter').innerHTML = count;
})




})();
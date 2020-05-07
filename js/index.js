let keyboard = document.querySelector('.container2');
let display = document.querySelector('.container1');
let layar = display.querySelector('h3');



keyboard.addEventListener('click', function (event) {
    if (event.target.className == 'char') {
        console.log(event.target);
    }
});
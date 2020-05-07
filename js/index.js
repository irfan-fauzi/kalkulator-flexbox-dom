let keyboard = document.querySelector('.container2');
let contiga = document.querySelector('.container1');
let display = contiga.querySelector('.display');

keyboard.addEventListener('click', function (e) {
    if (e.target.className == 'char') {
        display.textContent = e.target.textContent;
    }
});
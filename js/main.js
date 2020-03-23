// $(document).ready(function(){
//  $('.header').height($(window).height());
// })

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})

function show_hide_password(target) {
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
    return false;
}

var sec = 00;
var min = 30;
function refresh() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }
    if (sec <= 9) {
        sec = "0" + sec;
    }
    time = (min <= 9 ? "0" + min : min) + ":" + sec;
    if (document.getElementById) {
        timer.innerHTML = time;
    }
    inter = setTimeout("refresh()", 1000);
    if (min == '00' && sec == '00') {
        sec = "00";
        clearInterval(inter);
        /* выводим сообщение в элемент с id="tut", например <div id="tut"></div> */
        // tut.innerHTML = "Таймер завершил свою работу!";

        /* либо модальное окно */
        alert('Таймер завершил свою работу!');

        /* либо переход на какой-то адрес */
        //window.location='http://www.net-f.ru/';

        /* либо любой другой Ваш код */
    }
}

function check() {
    var submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
        submit.disabled = '';
    else
        submit.disabled = 'disabled';
}
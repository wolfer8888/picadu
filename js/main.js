// создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// создаем переменную в которую положим кнопку меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event){
  //отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс н аменю когда кликнуди по кнопке меню
  menu.classList.toggle('visible');
})
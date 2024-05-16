/*создание переменной для места в зале*/
let buttonItems = document.querySelectorAll('.place');
/*переменная счетчика выбранных мест*/
let i = 0;
/*переменная кнопка места применяемая для каждого блока*/
buttonItems.forEach(btn => {
    /*добавление слушателя по клику кнопки*/
    btn.addEventListener('click', function (event) {
        /*добавление нашему месту нового класс что место выбрано*/
        btn.classList.add('place_select');
        /*Останавливаем стандартное поведение браузера по умолчанию для данного события*/
        event.preventDefault();
        /*увелечение выбранных мест*/
        i = i + 1;
        /*добавление новых данных в текстовое поле о  местах*/
        document.getElementById('mySel').textContent = i; 
        /*добавление новых данных в текстовое поле о цене*/
        document.getElementById('total').textContent = i * 250;
    });
});

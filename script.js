$(function() { 
    // при большом кодве библиотек это делается чтоб не было конфликта имен с этими знаками, запуск в момент загрузки страницы
    $(document).on('click', 'button.exclusive', function() {
        let $button = $(this);
        $button.removeClass('added').addClass('disabled').attr('disabled', 'disabled');
        // attr это добавление значения стиля в документ
        setTimeout(function () {
            $button.removeClass('disabled').addClass('added').removeAttr('disabled');
        }, 1000);
    });
});
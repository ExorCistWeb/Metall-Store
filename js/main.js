$(".phone_mask").click(function() {
    $(this).setCursorPosition(3);
}).mask("+7(999) 999-99-99");

$(document).ready(function() {
    $('.open-modal-btn').click(function() {
        $('.modal').css('display', 'flex'); // Устанавливаем display: flex;
        $('body').css('overflow', 'hidden'); // Запрещаем прокрутку страницы
    });

    $('.close-modal-btn').click(function() {
        $('.modal').fadeOut();
        $('body').css('overflow', 'auto'); // Восстанавливаем прокрутку страницы
    });

    $('.modal').click(function(e) {
        if (e.target === this) {
            $(this).fadeOut();
            $('body').css('overflow', 'auto'); // Восстанавливаем прокрутку страницы
        }
    });

    // Обработчик клика на кнопку в модальном окне
    $('.modal button[type="submit"]').click(function() {
        // Проверяем, что все обязательные поля заполнены
        if ($('.telegram-name').val().trim() === '' || $('.telegram-phone').val().trim() === '') {
            alert('Заполните все обязательные поля!');
        } else {
            // Если все поля заполнены, закрываем модальное окно и восстанавливаем прокрутку страницы
            $('.modal').fadeOut();
            $('body').css('overflow', 'auto'); // Восстанавливаем прокрутку страницы
        }
    });
});




$(document).ready(function() {
    $('.telegram-form').submit(function(e) {
        e.preventDefault();

        var chatId = '-1001560231947'; // ID чата
        var apiKey = '6062118315:AAG9RqssrIxa9sEj6cZj1-68Ebkj8ySIl9A'; // API бота
        var name = $(this).find('.telegram-name').val();
        var phone = $(this).find('.telegram-phone').val();
        var question = $(this).find('.telegram-question').val();

        // Создаем пустое сообщение
        var message = '';

        // Проверяем наличие имени и добавляем его в сообщение
        if (name) {
            message += 'Имя: ' + name + '\n';
        }

        // Проверяем наличие телефона и добавляем его в сообщение
        if (phone) {
            message += 'Телефон: ' + phone + '\n';
        }

        // Проверяем наличие вопроса и добавляем его в сообщение
        if (question) {
            message += 'Вопрос: ' + question;
        }

        // Если заполнены оба поля (имя и телефон), то сообщение будет содержать только имя и телефон и отправится одним сообщением
        if (name && phone) {
            message = 'Имя: ' + name + '\nТелефон: ' + phone;
        }

        // Если сообщение не пустое, отправляем его
        if (message.trim() !== '') {
            $.ajax({
                url: 'https://api.telegram.org/bot' + apiKey + '/sendMessage',
                method: 'POST',
                data: {
                    chat_id: chatId,
                    text: message
                },
                success: function(response) {
                    console.log('Сообщение успешно отправлено в Telegram бота.');
                    // Дополнительные действия при успешной отправке сообщения
                    location.reload(); // Обновление страницы
                },
                error: function(error) {
                    console.error('Ошибка при отправке сообщения в Telegram бота:', error);
                    // Дополнительные действия в случае ошибки отправки
                }
            });
        } else {
            console.log('Нет данных для отправки.');
        }
    });
});
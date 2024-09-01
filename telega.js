// Обработчик события submit формы
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date1 = new Date();
    const date2 = date1.toDateString();
    const sell = document.getElementById('condition').value;
    console.log(sell)

    // Замените <TOKEN> на токен вашего бота и <CHAT_ID> на ваш chat_id
    const token = '7490850566:AAFUs-vMjvcEeDLZ4izM3yJ_hD7mIPx17zw';
    const chat_id = '1231630096';
    const message = `Имя: ${name}\nОписание: ${description}\nДата: ${date2}\nУслуга: ${sell}`;

    // Отправка данных в Telegram через API
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Сообщение отправлено в Telegram!');
            } else {
                alert('Ошибка отправки сообщения.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
});
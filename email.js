// Подключение EmailJS
(function () {
    emailjs.init("pIvIsU1KtrX2IEk45"); // Замените на ваш User ID из EmailJS
})();

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращение стандартной отправки формы

    // Сбор данных формы
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let condition = document.getElementById('condition').value;
    let email = document.getElementById('email').value

    // Параметры для отправки EmailJS
    let templateParams = {
        name: name,
        description: description,
        condition: condition,
        email: email
    };

    // Отправка данных через EmailJS
    emailjs.send('service_6j0k0pj', 'template_nabqogr', templateParams)
        .then(function (response) {
            console.log('Успех!', response.status, response.text);
            alert('Сообщение успешно отправлено!');
        }, function (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
    emailjs.send('service_6j0k0pj', 'template_dasmr5n', templateParams)
        .then(function (response) {
            console.log('Успех!', response.status, response.text);
            alert('Сообщение успешно отправлено!');
        }, function (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при отправке сообщения.');
        });
});

# films-mirror-tgBot
Telegram bot для получения ссылки на зеркало KINOLAND.BIZ
# Описание
Данный Telegram бот разработан с целью облегчить процесс запроса зеркала для сайта с фильмами. Он предоставляет удобный интерфейс для отправки запроса на получение зеркала и позволяет открыть последнее письмо с ссылкой на зеркало. Бот написан на Node.js и активно использует различные библиотеки для работы с Telegram API, электронной почтой и IMAP-серверами.
# Основные функции:
  - Открытие последней ссылки на зеркало: Бот проверяет наличие ответного письма с ссылкой на зеркало от KINOLAND.BIZ через протокол IMAP. Если бот обнаружит ответное письмо с ссылкой на зеркало, он перешлет его пользователю.
  - Запрос на обновление зеркала: Пользователи могут отправлять запрос на обновление зеркала для фильмов, в случае если ссылка из письма устаревает и больше не функционирует. При нажатии соответствующей кнопки, бот отправляет письмо на указанный адрес с запросом на предоставление зеркала.
  - Отправка репорта в техподдержку: Если новая ссылка на зеркало не приходит в течение долгого времени, пользователи могут отправить жалобу в техническую поддержку. Бот предоставляет кнопку для отправки репорта в техподдержку.
  - Бот работает в реальном времени и реагирует на сообщения пользователей и кнопки.
# Запуск
- В данный момент бот доступен по адресу @makatels-films-bot в telegram. Внимание - по данному адресу используется слегка другой дизайн (кнопки, сообщения, изображение), но функционал идентичен.
- Шаги для установки:
  - Скопировать репозиторий на хостинг
  - Выполнить команду 'npm install' в корне проекта
  - Запустить с помощью 'npm start'
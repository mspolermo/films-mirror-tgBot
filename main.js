import { bot } from './utils/getBot.js';
import { getMainMenu } from './utils/getMainMenu.js';
import { sendEmail } from './utils/sendEmail.js';
import { replyCheck } from './utils/replyCheck.js';

const mainMenuData = {
    caption: 'Telegram bot получения ссылки на зеркало KINOLAND.BIZ',
    reply_markup: {
        inline_keyboard: getMainMenu()
    }
};

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendPhoto(chatId, './static/logo.jpg', mainMenuData);
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'checkLastReply') {
        
        replyCheck(chatId);

    };

    if (query.data === 'sendReq') {
        sendEmail('mirror');
        bot.sendMessage(chatId, 'Запрос отправлен. Проверьте последнюю ссылку через несколько минут');
        setTimeout( () => bot.sendPhoto(chatId, './static/logo.jpg', mainMenuData), 2000);
    };

    if (query.data === 'createTicket') {
        sendEmail('ticket');
        bot.sendMessage(chatId, 'Разработчикам отправлен репорт о проблемах с обновлением ссылки');
        setTimeout( () => bot.sendPhoto(chatId, './static/logo.jpg', mainMenuData), 2000);
    };
});

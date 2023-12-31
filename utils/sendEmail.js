import nodemailer from 'nodemailer';
import {
    senderEmail,
    senderPassword,
    recipientEmail,
    supportMail
} from '../config/config.js';
import { getMixedString } from './getMixedString.js';

const askDictionary = {
    mirror: {
        subject: 'Хочу получить ссылку на зеркало',
        text: 'Добрый день! Пожалуйста отправьте ссылку на зеркало сайта'
    },
    ticket: {
        subject: 'Не получаю ответ на запрос ссылки',
        text: 'Добрый день! Отправляю запрос, но не получаю ссылку на зеркало( Может быть я попал в черный список?'
    }
}

// Функция отправки письма
export async function sendEmail(type) {
    let subject = '';
    let text = '';
    switch(type) {
        case 'ticket' :
            subject = askDictionary.ticket.subject;
            text = askDictionary.ticket.text;
            break;
        default:
            subject = getMixedString (askDictionary.mirror.subject);
            text = getMixedString (askDictionary.mirror.text);
            break;
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: senderEmail,
            pass: senderPassword
        }
    });

    const mailOptions = {
        from: senderEmail,
        to: (type === 'mirror' ? recipientEmail : supportMail),
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ошибка отправки письма:', error);
        } else {
            console.log('Письмо успешно отправлено:', info.response);
        }
    });

};
export function getMainMenu() {
    return [
        [
            {
                text: 'Открыть последнюю ссылку на зеркало',
                callback_data: 'checkLastReply'
            }
        ],
        [
            {
                text: 'Обновить ссылку на зеркало',
                callback_data: 'sendReq'
            }
        ],
        [
            {
                text: 'Отправить жалобу в техподдержку',
                callback_data: 'createTicket'
            }
        ],
    ]
}
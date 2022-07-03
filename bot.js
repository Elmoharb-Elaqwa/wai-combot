const TelegramBot = require('node-telegram-bot-api');
const token = '5538967847:AAG6JBz05FerYr34yWcWmIl-SS7Uo1hPhdM';

const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
  if (msg.text == 'السلام عليكم') {
    bot.sendMessage(
      msg.chat.id,
      ` وعليكم السلام ورحمة الله وبركاتة ${msg.from.first_name} ${msg.from.last_name}
       <a href="https://t.me/botreplay/1107"><b>من نحن  </>
       </a>`,
      {
        reply_to_message_id: msg.message_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }
    );
  }
  if (msg.text === 'زللت' || msg.text === 'زليت' || msg.text === 'انتكست') {
    bot.sendMessage(
      msg.chat.id,
      ` لا عليك يا بطل 💪
       <a href="https://t.me/botreplay/880"><b>زللت  </>
       </a>`,
      {
        reply_to_message_id: msg.message_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }
    );
  }
  if (
    msg.text === 'البداية' ||
    msg.text === 'البدايه' ||
    msg.text === 'كيف ابدأ بالتعافي'
  ) {
    bot.sendMessage(
      msg.chat.id,
      `<a href="https://t.me/botreplay/47"><b> كيف ابدأ بالتعافي</></a>`,
      {
        reply_to_message_id: msg.message_id,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }
    );
  }
});

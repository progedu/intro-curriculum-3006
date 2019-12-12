'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });

  // おみくじbot
  robot.hear(/lot>/i, (msg) => {
    const username = msg.message.user.name;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, ${username}`);
  });

  // 時刻表示bot
  robot.hear(/now>/i, (msg) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    msg.send(`${year}年${month}月${day}日 ${hour}時${minute}分${second}秒`);
  });

  // 名言bot
  // NOTE: サーバーに *fortuneコマンド* がインストールされている必要があります
  robot.hear(/fortune>/i, (msg) => {
    const exec = require('child_process').exec;
    exec('fortune', (error, stdout, _stderr) => {
      if (error) {
        msg.send('名言の取得に失敗しました。');
        return;
      }
      msg.send(`${stdout}`);
    });
  });
};

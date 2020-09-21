'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉！やったね', '吉　楽しいこと見つけよう', '中吉　好きなもの食べてパワーアップ', '末吉　整理整頓を心がけようね', '凶　体調管理に気をつけて'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};

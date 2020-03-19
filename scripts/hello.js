'use strict';
module.exports = (robot) => {
  robot.hear(/おみくじ/i, (msg) => {//HubotのAPIの利用方法
    const user_id = msg.message.user.id;
    const lots = ['大吉','吉','中吉','末吉','凶']
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot},<@${user_id}>`);
  })
}

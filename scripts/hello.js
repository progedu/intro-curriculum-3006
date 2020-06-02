'use strict';
module.exports = (robot) => {
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
  robot.hear(/おみくじ/i, (msg) => {
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const user_id = msg.message.user.id;
    msg.send(`${lot}, <@${user_id}>`);
  });
};

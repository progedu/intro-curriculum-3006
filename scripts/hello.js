'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ['大晴れ男', '中晴れ男', '小晴れ男', '曇り男', '雨男'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};
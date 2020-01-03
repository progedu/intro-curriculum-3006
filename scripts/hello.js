
'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ['猫', '犬', '熊', '兎', '虎'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};

'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', ];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
  robot.hear(/HappyDay/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['GOOD', 'NICE', 'GREAT', 'EXCELLENT','AMAZING','COOL','AWESOME','LOVELY' ];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`Today is a ${lot} day! , <@${user_id}>`);
  });
};
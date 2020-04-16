'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });

  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });

  robot.hear(/晩ごはん/i, msg => {
    const user_id = msg.message.user.id;
    const eats = ['ラーメン', '寿司', 'カレーライス', 'サラダ'];
    const eat = eats[Math.floor(Math.random() * eats.length)];
    msg.send(`${eat}, <@${user_id}>`);
  });
};

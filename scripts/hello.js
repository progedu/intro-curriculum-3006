'use strict';

const lots = ['大吉','吉', '中吉', '小吉', '凶'];

module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });
  robot.hear(/lot>/i, (msg) => {
    const username = msg.message.user.name;
    const lot = lots[parseInt(Math.random() * lots.length)];

    msg.send(`${lot}, ${username}`);
  });
};

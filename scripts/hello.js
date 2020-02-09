'use strict';

const lots = ['大吉', '中吉', '吉', '凶', '大凶'];

module.exports = (robot) => {
  robot.hear(/おみくじ/, (msg) => {
	const username = msg.message.user.name;
	const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, ${username}`);
  });
};

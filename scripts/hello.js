'use strict';

const lots = ['大吉', '吉', '中吉', '末吉', '凶'];

module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const id = msg.message.user.id;
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`<@${id}> your lot is ` + lot);
	});
};
'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const userid = msg.message.user.id;
		msg.send(`Hello, <@${userid}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const userid = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${userid}>`);
	});
};

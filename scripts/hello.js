'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;
					lots = ['大吉', '吉', '中吉', '末吉', '凶'],
					lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
	});
};
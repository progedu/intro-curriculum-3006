	'use strict';
	module.exports = (robot) => {
		robot.hear(/hello>/i, (msg) => {
			const user_id = msg.message.user.id;
			msg.send(`Hello, <@${user_id}>`);
		});
		robot.hear(/おみくじ/i, (msg) => {
			const user_id = msg.message.user.id;
			const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
			const lot = lots[Math.floor(Math.random() * lots.length)];
			msg.send(`${lot}, <@${user_id}>`);
		});
		robot.hear(/ほめて/i, (msg) => {
			const user_id = msg.message.user.id;
			const lots = ['天才', '世界一', 'かっこいい', '流石', '完璧'];
			const lot = lots[Math.floor(Math.random() * lots.length)];
			msg.send(`${lot}, <@${user_id}>`);
		});
};
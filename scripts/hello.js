'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;

		const lots = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${username}のおみくじの結果は...「${lot}」です！`);
	});
};

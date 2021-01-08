'use strict';

module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		// 自分の名前を取得する
		const username = msg.message.user.name;
		//おみくじの結果を取得する
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];

		msg.send(lot + `,<@${username}>`);
	});

	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(`Hello, <@${username}>`);
	});
};
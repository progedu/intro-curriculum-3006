'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => { // おみくじbotの追加（練習問題）
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶', '大凶']; // 大凶を追加
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + username);
	});
};

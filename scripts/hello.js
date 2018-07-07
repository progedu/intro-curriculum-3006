'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶']
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(username + ' の今日の運勢は ' +  lot + ' です!');
	});
	robot.hear(/color>/i, (msg) => {
		const username = msg.message.user.name;
		const colors = ['ブルー', 'シルバー', 'ピンク', 'オレンジ', 'パープル']
		const color = colors[Math.floor(Math.random() * colors.length)];
		msg.send(username + ' の今日のラッキーカラーは:  ' +  color + ' です!!!!!');
	});
};
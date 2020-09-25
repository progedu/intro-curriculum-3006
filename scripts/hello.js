'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(`Hello, <@${username}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    	const lot = lots[Math.floor(Math.random() * lots.length)];
    	const colors = ['赤', '白', '黄色', '青', '緑'];
    	const color = colors[Math.floor(Math.random() * colors.length)];
    	msg.send(`<@${username}>さんの今日の運勢は${lot}です。ラッキーカラーは${color}です。良い一日を！`);
	});
};

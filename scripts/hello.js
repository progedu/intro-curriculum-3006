'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['赤', '青', '黄色', '緑', '紫', '白'];
		const num = Math.floor(Math.random() * lots.length);
		const lot = lots[num];
		msg.send(`今日の${username}のラッキーカラーは${lot}です！`);
	});
};

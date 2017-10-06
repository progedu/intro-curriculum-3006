'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
	});
	robot.hear(/eat>/i, (msg) => {
		const username = msg.message.user.name;
        const eats = ['ラーメン','牛丼','寿司','鍋'];
        const eat = eats[Math.floor(Math.random() * eats.length)];
        msg.send(username + 'さん 今日の晩御飯は？ ' + eat + '！');
	});
};

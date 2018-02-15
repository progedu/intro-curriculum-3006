'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/今日の運勢/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉(^o^)', '吉(^_^)', '中吉(\'_\')', '末吉(*_*)', '凶(T_T)']
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg .send(username + ' の今日の運勢は... ' + lot)
	});
};

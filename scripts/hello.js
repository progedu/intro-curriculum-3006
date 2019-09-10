'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['カレー', '餃子', 'ラーメン', 'チャーハン', '焼き肉', 'うどん'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`今日のごはんは ${lot} です！ @${username}`);
	});
};

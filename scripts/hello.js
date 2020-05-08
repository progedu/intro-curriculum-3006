'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '忠吉', '庄吉', '今日', '大京'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`今日のご飯は${lot}です！　@${username}`);
	});
};

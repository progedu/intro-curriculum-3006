'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(`Hello, <@${username}`);
	});

	robot.hear(/ルーレット/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['炎', '水', '風', '雷', '土', '闇', '光', '神'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`@${username}は${lot}タイプです！`);
	});
};

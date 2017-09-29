'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '中吉', '小吉', '吉', '半吉', '末吉', '末小吉'];//凶なし
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${username} の運勢は「${lot}」です！`);
	});
};

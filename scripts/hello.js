'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('hello, @' + username);
	});
	robot.hear(/おみくじ>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('Hi, how ara you. @' + username + 'おみくじの結果 あなたは' + lot + 'です。');
	});
};

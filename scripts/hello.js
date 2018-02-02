'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/いま転職するなら>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['楽天', 'ビズリーチ', 'メルカリ', 'リクルート', 'ヤフー', 'LINE'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + 'がオススメですよ、' + username);
	});

};
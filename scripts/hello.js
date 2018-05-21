'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
	});
	robot.hear(/好きな色は/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['赤', '黄', '黒', '緑', '青'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
	});
};

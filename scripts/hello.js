'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '吉', '末吉', '中吉', '吉'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('Hello, ' + lot);
	});
};

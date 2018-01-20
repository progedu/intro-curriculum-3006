'use strict';
module.exports = (robot) => {
	const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot+',' + username);
	});
};

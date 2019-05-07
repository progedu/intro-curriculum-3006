'use strict';
module.exports = (robot) => {
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '中吉', '吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot);
	});
};
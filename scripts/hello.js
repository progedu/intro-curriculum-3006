'use strict';
module.exports = (robot) => {
	// 'lot>' と送ると運勢を返す
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '小吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];

		msg.send(lot + ', ' + username);
	});
};

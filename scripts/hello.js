'use strict';
module.exports = (robot) => {
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶']
		const idx = Math.floor(Math.random() * lots.length);
		const username = msg.message.user.name;
		msg.send(`${lots[idx]}, ${username}`);
	});
};

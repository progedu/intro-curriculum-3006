'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		const omikuji = ['大吉', '吉', '中吉', '末吉', '凶'];
		const idx = Math.round(Math.random() * 5);
		msg.send(`${omikuji[idx]}, ${username}`);
	});
};

'use strict';
module.exports = (robot) => {
	robot.hear(/(.*)$/, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const user_id = msg.message.user.id;
		msg.send(`今日の<@${user_id}>さんの運勢は、${lot}です。`);
	});
};

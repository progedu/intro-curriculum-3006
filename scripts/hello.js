'use strict';
module.exports = (robot) => {
	robot.hear(/今日の運勢>/i, (msg) => {
		const username = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`<@${username}>の運勢は${lot}です`);
	});
};
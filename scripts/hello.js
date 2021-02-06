'use strict';
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;

		msg.send(lot + 'です, ' + `<@${user_id}>` + 'さん');
	});
};

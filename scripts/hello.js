'use strict';

const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
const lot = lots[Math.floor(Math.random() * lots.length)];

module.exports = (robot) => {
	robot.hear(/おみくじ/, (msg) => {
		const user_id = msg.message.user.id;
		console.log(lot);
        msg.send(`<${lot}> でした！, <@${user_id}>`);
	});
};

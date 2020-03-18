'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_name = msg.message.user.name;
		msg.send('Hello, ' + user_name);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const user_name = msg.message.user.name;
		msg.send(`${lot}, <@${user_name}>`);
	});
};

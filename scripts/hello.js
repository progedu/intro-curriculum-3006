'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉', '吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const user_id = msg.message.user.id;
		msg.send(`${lot}, <@${user_id}>`);
	});
};

'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['大吉^_^','中吉','吉','小吉','末吉','凶T_T'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`あなたの運勢は${lot},<@${user_id}>`);
	});
};


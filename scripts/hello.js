'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.name;
		msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['LT','MT','HT','TD','SPG'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`あなたの乗る車両は ${lot} です。, <@${user_id}>`);
	});
};

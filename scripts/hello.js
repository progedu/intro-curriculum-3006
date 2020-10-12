// 挨拶
'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
};
// おみくじ
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '区']
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('@' + user_id + 'の運勢は' + lot);
	});
};
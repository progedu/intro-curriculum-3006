'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
	// robot.respond(/(.*)$/i, (msg) => {
	// 	const greeting = msg.message.text;
	// 	if greeting is "こんにちは"
	// 		msg.reply "お昼はもう食べましたか？"
	// 	else if greeting is "おはよう"
	// 		msg.reply "よい1日を"
	// 	else if greeting is "こんばんは"
	// 		msg.reply "一日お疲れさまでした"
	// });
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`<@${user_id}>の今日の運勢は${lot}`);
	});
};

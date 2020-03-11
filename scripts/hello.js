'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});

	robot.hear(/おみくじ/i, (msg) => {
		// slackのユーザ名
		const user_id = msg.message.user.id;

		// ランダムでlotsの中から選択
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
	 
		// 例) 大吉, {あなたのユーザー名}
		msg.send(`${lot}, <@${user_id}>`);
	});
};

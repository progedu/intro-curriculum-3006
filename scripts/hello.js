'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.name;
		msg.send(`Hello,  <@${user_id}>`);
	});
	robot.hear(/おみくじ>/i, (msg) => {
		const user_id = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		console.log(lot);
		if (lot === '大吉' ) {
			msg.send(`<@${user_id}>さんの本日のおみくじの結果は　${lot} です。今日は最高の運勢です。`);
		}else if (lot === '吉' ) {
			msg.send(`<@${user_id}>さんの本日のおみくじの結果は　${lot} です。今日は良い運勢です。`);
		}else if (lot === '中吉' ) {
			msg.send(`<@${user_id}>さんの本日のおみくじの結果は　${lot} です。今日は普通の運勢です。`);
		}else if (lot === '末吉' ) {
			msg.send(`<@${user_id}>さんの本日のおみくじの結果は　${lot} です。今日は微妙な運勢です。`);
		}else {
			msg.send(`<@${user_id}>さんの本日のおみくじの結果は　${lot} です。今日は良くない運勢です。`)
		};
	});
};
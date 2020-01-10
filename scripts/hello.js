'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i,(msg) =>{//マッチしたら関数実行
		const user_id = msg.message.user.id
		const lots = ['大吉','吉','中吉','末吉','凶','大凶']; //変数宣言
		const lot = lots[Math.floor(Math.random() * lots.length)];// ランダム変数宣言
		msg.send('${lot},<@${user_id}>'); //メンション

	})
};
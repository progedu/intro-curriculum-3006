'use strict';
//lot> と入力すると、占い結果を毎回ランダムに返す
module.exports = (robot) => {
	robot.hear(/lots>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		//lots配列数の範囲でランダムに数字の整数を返す
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + username);
	});
};

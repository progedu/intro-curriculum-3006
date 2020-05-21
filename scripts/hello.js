'use strict';
module.exports = (robot) => {

	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','吉','中吉','末吉','凶'];
		// randomで1より小さい小数×配列の個数＝配列の個数-1（＝添え字数に一致）
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`今日の運勢は${lot}です！@${username}`);
	});

};// module.exports

/*　Math関数について
Math.floor …　小数点以下切り捨て
Math.random … 0～1の範囲で浮動小数の乱数生成
*/

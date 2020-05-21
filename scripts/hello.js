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

	robot.hear(/名前占い>(.*)/i, (msg) => {
		const username = msg.message.user.name;
		const answers = [
			'のいいところは声です。',
			'のいいところはまなざしです。',
			'のいいところは情熱です。',
			'のいいところは厳しさです。',
			'のいいところは知識です。',
			'のいいところはユニークさです。',
			'のいいところは用心深さです。',
			'のいいところは見た目です。',
			'のいいところは決断力です。',
			'のいいところは思いやりです。',
			'のいいところは感受性です。',
			'のいいところは節度です。',
			'のいいところは好奇心です。',
			'のいいところは気配りです。',
			'のいいところはその全てです。',
			'のいいところは自制心です。',
			'のいいところは優しさです。'
		];
		
		let sumOfCharCode = 0;
		for (let i = 0; i < username.length; i++) {
			sumOfCharCode += username.charCodeAt(i);
		}
		
		const index = sumOfCharCode % answers.length;
		let result = answers[index];
		msg.send(`${username}${result}`);
	});


};// module.exports

/*　Math関数について
Math.floor …　小数点以下切り捨て
Math.random … 0～1の範囲で浮動小数の乱数生成
*/

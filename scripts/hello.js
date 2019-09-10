'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`「${lot}」だよ。${username}`);
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
			'のいいところは自制心です。'
		];
		let sumOfCharCode = 0;
		for (let i = 0; i < username.length; i++) {
			sumOfCharCode = sumOfCharCode + username.charCodeAt(i);
		}
		const index = sumOfCharCode % answers.length;
		let result = answers[index];
		msg.send(`${username}${result}`);
	});

};


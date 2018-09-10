'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	// 'lot>' と送ると運勢を返す
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '小吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];

		msg.reply(lot + 'だよ。 ' + username);
	});

	robot.hear(/janken>(グー|チョキ|パー)/, (msg) => {
		const jankens = ['グー', 'チョキ', 'パー'];
		const botJanken = Math.floor(Math.random() * jankens.length);
		const janken = jankens[botJanken];
		let myJanken = null;
		let result = '';

		switch (msg.match[1]) {
			case 'グー':
				myJanken = 0;
				break;
			case 'チョキ':
				myJanken = 1;
				break;
			case 'パー':
				myJanken = 2;
				break;
		}

		if (myJanken === botJanken) {
			result = 'あいこだよ！';
		} else if ((myJanken + 1) % jankens.length === botJanken) {
			result = 'あなたの勝ちだよ！';
		} else {
			result = 'あなたの負けだよ！';
		}

		msg.reply(janken + ' ' + result);
	});
};

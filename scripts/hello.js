'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello!!!!' + username);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉いぇい！', '吉ふぉー！', '中吉・・・', '末吉；', '凶orz'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot);
	});
	robot.hear(/おい/i, (msg) => {
		const henjis = ['おいとは何だコノヤロー','はい何でしょうかご主人様','あぁ？','アレクサ、人間が何か言ってるぞ','Hello!!!!']
		const henji = henjis[Math.floor(Math.random() * henjis.length)];
		msg.send(henji);
	});
	robot.hear(/こんにちは/i, (msg) => {
		const text = msg.message.text;
		msg.send(`${text}ってなんですか？`);
	});
};

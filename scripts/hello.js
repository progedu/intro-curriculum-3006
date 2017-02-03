'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉！' + username + 'さん、今日はいい日だね！',
					  '中吉！' + username + 'さん、いい感じいい感じ！',
					  '吉！' + username + 'さん、なんかいいことありそう！',
					  '末吉！' + username + 'さん、今日はプチハッピーがあるよ！',
					  '凶〜〜。。。' + username + 'さん、悲しいことあっても元気出してね'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot);
	});
};

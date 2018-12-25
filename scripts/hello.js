'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶', '大凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const items = ['靴ひも', '万年筆', 'ダンボール', 'バナナ', 'ハードディスク', 'アルミホイル'];
		const item = items[Math.floor(Math.random() * items.length)];
		msg.send('来年の' + username + 'の運勢は' + lot + 'です。ラッキーアイテムは' + item + 'です。');
	});
}

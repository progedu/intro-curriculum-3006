'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	
	robot.hear(/ごはん/i, (msg) => {
		const username = msg.message.user.name;
		const category = ['和食','洋食','中華','イタリアン','フレンチ','肉料理','鍋料理',];
		const food = category[Math.floor(Math.random() * category.length)];
		msg.send(`@${username}の今日のご飯は、${food}がいいとおもうよ`);
	});
		
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`@${username}の運勢は、${lot}!`);
	});
};

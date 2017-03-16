'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
	const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random()*lots.length)];
		//math.random()--0から１までランダム
		//lots.length (配列の長さをかける)
		//math.floor 小数点以下全部切っちゃう
		msg.send( lot + ',' + username);
	});
};

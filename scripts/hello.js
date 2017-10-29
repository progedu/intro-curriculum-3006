'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)]; //0～１の乱数 * lotsの要素数 Math.floorは小数点切捨て
		msg.send(msg.message.user.name + 'の運勢は：' + lot);
	});
};

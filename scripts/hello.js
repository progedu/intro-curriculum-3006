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
		// Math.rondom() 0 =< , < 1 をランダムに返す
		// lots.length 配列の要素数(ここでは5)を返す
		// Math.random() * lots.length 0 =< , < 5 を返す
		// Math.floor 浮動小数点数を切り捨て　
		// したがって、Math.floor(Math.random() * lots.length)は 0,1,2,3,4 を返す
		msg.send(lot + ',' + username );
	});
};



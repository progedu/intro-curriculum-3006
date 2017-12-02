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
		msg.send(lot + ', ' + username);
	});
	robot.hear(/yahho>/i, (msg) => {
		var str = '';
		var t = Math.floor(Math.random() * 5) + 1;
		for (var i = 1; i <= t ; i++) {
			str += 'ヤッホー'; //5かい以内のランダムな回数ヤッホーを返す
		}
		msg.send(str);
	});
};

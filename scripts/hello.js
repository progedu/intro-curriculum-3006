'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) =>{
		const username=msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		//Math.randam0~1未満の数字ランダム、Math.floor少数切り捨て。0~4になる
		msg.send(lot + ', @' + username);
	})
};

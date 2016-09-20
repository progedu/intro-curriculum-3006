'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => { //hollo>を受け取ってmsgを実行する
		const username = msg.message.user.name; //usernameを取得する
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)]; //lotsの0~4の値を取得する
		msg.send(lot + ', '  + username);
	});
};

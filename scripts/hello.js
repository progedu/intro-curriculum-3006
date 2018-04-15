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

	robot.hear(/seiso>/, (msg) => {
		const username = msg.message.user.name;
		const mitos = ['わたくしで隠さなきゃ', 'どなたかおるやんけ', '起立!、気をつけ!', '赤子の拳のような'];
		const mito = mitos[Math.floor(Math.random() * mitos.length)];
		msg.send(mito + ', ' + username);
	});
};

'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + displayName);
	});

	robot.hear(/lot>/i, (msg) => {
		const displayName = msg.message.user.profile.display_name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + displayName);
	});

	robot.hear(/seiso>/, (msg) => {
		const displayName = msg.message.user.profile.display_name;
		const mitos = ['わたくしで隠さなきゃ', 'どなたかおるやんけ', '起立!、気をつけ!', '赤子の拳のような'];
		const mito = mitos[Math.floor(Math.random() * mitos.length)];
		msg.send(mito + ', ' + displayName);
	});
};

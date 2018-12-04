'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '中吉', '末吉', '吉', '凶'];
		let i = Math.floor(Math.random() * lots.length);
		const lot = lots[i];
		const word = [
			'いい日になるね！',
			'いいことありそう！',
			'いいことあるかも？',
			'穏やかな一日',
			'どんまい！'
		]
		msg.send(lot + ', ' + word[i]);
	});
};

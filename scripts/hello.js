'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/今日の晩御飯/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['寿司', '焼肉', 'うどん', 'パスタ', '鍋'];
	    const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ', ' + username);
	});

};



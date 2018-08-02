'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/魔法>/i,(msg) => {
		const username = msg.message.user.name;
		const lots = ['メラ', 'バギ', 'イオ', 'ヒャド', 'ホイミ'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ',' + username)
	});

};

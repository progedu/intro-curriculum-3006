'use strict';
module.exports = (robot) => {

	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉0', '大吉1', '大吉2', '大吉3', '大吉4'];		//ゆとり教育なので
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ' , ' + username);
	});
	
};

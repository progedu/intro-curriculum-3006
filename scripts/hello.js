'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	// lot> 
	robot.hear(/運気>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '大凶', '中吉', '吉', '末吉','凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('今回の運気は' + lot + 'です。 ' + username);
	});

};

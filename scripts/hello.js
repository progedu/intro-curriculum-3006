'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		// const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lots = ['大吉', '吉', '中吉', '末吉',' 凶'];
		
		// const lot = lots[Math.floor(Math.random() * lots.length)];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		
		// msg.send(lot + ', ' + username);
		msg.send(username + 'は' + lot + 'を引きました！');
	});
};

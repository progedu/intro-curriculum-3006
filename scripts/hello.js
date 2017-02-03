'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
        const lots = ['大吉', '吉', '中吉', '小吉', '凶', '末吉', '吉凶未分', '吉凶交々'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('Today\'s fortune of ' + username + ' is ' + lot);
	});
};

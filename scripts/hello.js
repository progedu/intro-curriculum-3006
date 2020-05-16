'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
};
// HUBOT_SLACK_TOKEN=xoxb-1152334156016-1141157354545-TXjxADXtFSdWZgDyWxbuCSTH --adapter slack
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		msg.send(lot + ', ' + username);
	});
};


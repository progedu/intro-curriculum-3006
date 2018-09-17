'use strict';
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const result = sample(lots);
		msg.send(`${result}, ${username}`);
	});
};

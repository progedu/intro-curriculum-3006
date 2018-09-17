'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lat>/i, (msg) => {
		const lats = ['大吉', '中吉', '小吉', '凶']
		const lat = lats[Math.floor(Math.random() * lats.length)]
		const username = msg.message.user.name
		msg.send(lat + ', ' + username)
	})
};

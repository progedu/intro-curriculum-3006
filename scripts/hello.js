'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
};
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('大吉' + username);
	});
};

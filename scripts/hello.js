'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.id;
		msg.send('Hello, ' + username);
	});
};

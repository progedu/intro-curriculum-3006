(function () {
	'use strict';
	module.exports = (robot) => {
		robot.hear(/hello>/i, (msg) => {
			let username = msg.message.user.name;
			msg.send('Hello, ' + username);
		});
	};
})();

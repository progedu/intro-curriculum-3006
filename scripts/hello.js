'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['年収８００万', '起きる時間が自由', '一人暮らし', '団体のチャンピオン', 'お肌つるつる'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot +', ' + username);
	});
};

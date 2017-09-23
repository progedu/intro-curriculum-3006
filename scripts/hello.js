'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

robot.hear(/今日の運勢/i, (msg) => {
const username = msg.message.user.name;
const lots =['超大吉','大吉','中吉','凶','大凶'];
const lot = lots[Math.floor(Math.random() * lots.length )];
msg.send(username + '　の今日の運勢は　'　+ lot);
});
};


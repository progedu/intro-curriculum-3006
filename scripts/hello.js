'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','吉','中吉','末吉','凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${username}さんの、今日の運勢は、${lot}です！`);
		// const username = msg.message.user.name;
		// msg.send('Hello, ' + username);
	});
};

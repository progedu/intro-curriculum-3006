'use strict';
module.exports = (robot) => {
	robot.hear(/hello/i, (msg) => {
		const username = msg.message.user.name;
		msg.send("Hello " + username);
	});
	robot.hear(/lot/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','中吉','吉','小吉','末吉','凶','大凶',]
		const lot = lots[Math.floor(Math.random() * lots.length)]
		msg.send("今日の" + username + "の運勢は" + lot + "です");
	});
	robot.hear(/今日の運勢/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','中吉','吉','小吉','末吉','凶','大凶',]
		const lot = lots[Math.floor(Math.random() * lots.length)]
		msg.send("今日の" + username + "の運勢は" + lot + "です");
	});
};

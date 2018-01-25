'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', 'とても大吉', 'すごく大吉', 'やっぱり大吉', '凶だと思ったら大吉'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + "," + username);
	});
};

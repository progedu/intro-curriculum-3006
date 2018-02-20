'use strict';
module.exports = (robot) => {
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉','中吉','小吉','吉'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send('あなたの運勢は,' + lot);
	});
};

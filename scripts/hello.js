'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじよろ>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','中吉','小吉','吉','凶','大凶','チョミメン'];
		const lot = lots[Math.floor(Math.random()*lots.length)];
		msg.send(username+'の運勢は'+lot+'です。');
	});
};

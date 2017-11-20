'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉 やった！', '吉　いえぃ！', '中吉　そこそこ', '末吉　残念', '凶……'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		msg.send(lot + ', ' + username);
	});
};

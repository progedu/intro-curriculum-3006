'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const userid = msg.message.user.id;
		msg.send('Hello, ' + `<@${userid}>`);
		});

	robot.hear(/おみくじ/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['a', 'b', 'c'];
		const lot = lots[Math.floor(Math.random()*lots.length)];
		msg.send(`${lot}, ${username}`);
		});
};

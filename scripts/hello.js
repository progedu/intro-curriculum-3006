'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/fortune>/i, (msg) => {
		const user_id = msg.message.user.id;
    const lots = ['very lucky', 'lucky', 'normal', 'unlucky', 'very unlucky'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
		});
};

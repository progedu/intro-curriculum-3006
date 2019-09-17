'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/おみくじ/i, (msg) => {
        const user_id = msg.message.user.id;
        const lots = ['大吉です','吉です','中吉です','末吉です','凶です']
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot}, <@${user_id}>`);
    });
};

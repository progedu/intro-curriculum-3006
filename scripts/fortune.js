'use strict';
module.exports = (robot) => {
	robot.hear(/Fortune/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['Great fortune', 'Fortune', 'Middle fortune', 'Uncertain luck','Misfortune'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot} , <@${user_id}>`);
	});
};

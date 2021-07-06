'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
			const user_id = msg.message.user.id;
			msg.send(`May the force be with you, <@${user_id}>`);
	});
	robot.hear(/lottery/i, (msg) => {
			const user_id = msg.message.user.id;
			const lots = ['大吉', '吉', '中吉', '末吉', '凶', '大凶'];
			const lot = lots[Math.floor(Math.random() * lots.length)];
			msg.send(`You've got ${lot} , <@${user_id}>`);
	})  
};

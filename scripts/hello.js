'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello!！, <@${user_id}>` );
	});
	robot.hear(/おみくじ/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['大吉です','吉です','中吉だ','末吉くん','凶だね'];
		const lot = lots[Math.floor(Math.random()*lots.length)];
		msg.send(`${lot},<@${user_id}>`);
	});
};

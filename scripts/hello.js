'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
        const user_id = msg.message.user.id;
        console.log(msg);
        msg.send(`Hello, <@${user_id}>`);
	});
	
	robot.hear(/おみくじ/i, (msg) => {
		const user_id = msg.message.user.id;
		const lots = ['大好き', '大吉', '吉', '中吉', '末吉', '凶', '大凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot}, <@${user_id}>`);
	});
};

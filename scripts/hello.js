'use strict';
module.exports = (robot) => {

	robot.hear(/hello>/i, msg => {
        const user_id = msg.message.user.id;
        msg.send(`hello 😆, <@${user_id}>`);
    });
	robot.hear(/hey siri/i, msg => {
        const user_id = msg.message.user.id;
        msg.send(`I'm not siri 🤔, <@${user_id}>`);
    });
	robot.hear(/おみくじ/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '中吉', '小吉', '末吉', '凶', '大凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
	});
	robot.hear(/emoji/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['😀', '😖', '👺', '😱', '🤔', '💪'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
	});
};

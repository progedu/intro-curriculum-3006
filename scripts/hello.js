'use strict';
module.exports = (robot) => {
	robot.hear(/[おみくじ|くじ|運勢]/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		const txt = msg.message.text;

		msg.send(txt + "！ " + username + " さんの運勢は" + lot + "です");
	});
    robot.hear(/hello>/i, msg => {
        const user_id = msg.message.user.id;
        msg.send(`Hello, <@${user_id}>`);
    });
    robot.hear(/ping/i, msg => {
        msg.send('pong');
    });
};
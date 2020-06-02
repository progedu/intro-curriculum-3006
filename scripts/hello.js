'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const userid = msg.message.user.id;
		msg.send(`Hello, <@${userid}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const userid = msg.message.user.id;
		const choice = ['大吉', '吉', '中吉', '末吉', '凶'];
		const fortune = choice[Math.floor(Math.random() * choice.length)];
		msg.send(`<@${userid}>さん、${fortune}です `);
	});
};
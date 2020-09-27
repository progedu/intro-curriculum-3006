'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const user_id= msg.message.user.id
		const omikujis = ["大吉","吉","中吉","末吉","凶"];
		const omikuji = omikujis[Math.floor(Math.random() * omikujis.length)]
		msg.send(`${omikuji}, <@${user_id}>`)

	});
};

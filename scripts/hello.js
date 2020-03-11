'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(`Hello, ' + <@${username}>`);
	});
	robot.hear(/おみくじ/i, (msg) => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const fortune = lots[Math.floor(Math.random()*lots.length)];
    const user_id = msg.message.user.id;
    msg.send(`${fortune} , <@${user_id}>`);
	});
};

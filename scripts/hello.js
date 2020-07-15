'use strict';
const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/おみくじ/, (msg) =>{
		const lot = lots[Math.floor(Math.random()*lots.length)];
		const userName = msg.message.user.name;
		msg.send(lot + ', ' + userName);
	});
};

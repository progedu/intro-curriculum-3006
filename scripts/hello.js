'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		omikuji();
		msg.send(result + username);
	});
};

var result = null;
function omikuji(){
	const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
	const lot = lots[Math.floor(Math.random() * lots.length)];
	result = lot;
}
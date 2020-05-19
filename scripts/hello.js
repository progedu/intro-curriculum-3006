'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉', '中吉', '吉', '末吉', '凶',];
		// random で 0-1 の少数ランダム値を取得し、配列数を掛けた上で、少数を切り捨てることで配列のインデックスとする
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		msg.send(`${lot},${username}`);
	});
};

'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじ>/i, (msg) => {
		const lots = ['daikiti', 'kiti', 'tyuukiti', 'suekiti', 'kyou'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`あなたの運勢は, lot`);
	});
};

(function () {
	'use strict';
	module.exports = (robot) => {
		robot.hear(/hello>/i, (msg) => {
			const username = msg.message.user.name;
			msg.send('Hello, ' + username);
		});
		
		robot.hear(/lot>/i, (msg) => {
			const username = msg.message.user.name;
			const lots = ['超大吉', '大吉', '吉', '中吉', '末吉', '凶', '大凶'];
			const lot = lots[Math.floor(Math.random() * lots.length)];
			msg.send(username + ' の今日の運勢は・・・ ' + lot + ' でした!!');
		});

		robot.hear(/looot>/i, (msg) => {
			const username = msg.message.user.name;
			const looots = ['勉強しなさい', '5分休憩', '解散!'];
			const looot = looots[Math.floor(Math.random() * looots.length)];
			msg.send(username + ' は ' + looot);
		});
	};
})();

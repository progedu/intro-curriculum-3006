'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/明日の天気>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['快晴', '晴れ', '曇り', '時時雨', '雨', '雷',　'ハリケーン',　'霧', '霜', '雪'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`明日の天気は ${lot} です！ @${username}`);
	});
};

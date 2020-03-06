'use strict';
module.exports = (robot) => {
	robot.hear(/おみくじ/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		msg.send(`${lot} ,  ${username}`);
	});
	robot.hear(/今日の天気は？/i, (msg) => {
		const wheather = ['晴れ', '雨', '曇り', '雪', '霧', '濃霧', '快晴', '終末'];
		const wheathers = wheather[Math.floor(Math.random() * wheather.length)];
		const user_id = msg.message.user.id;
		msg.send(`今日の天気は${wheathers}です。 <@${user_id}>`);
	  });
};

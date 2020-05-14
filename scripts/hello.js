'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	  });

	robot.hear(/おみくじ/i, (msg) => { //正規表現
		const user_id = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
		 // <@~~>がないと数値にエンコードされる
		 // Slackのエスケープシークエンスを使うとユーザー名が文字列埋め込みになる
	});
};

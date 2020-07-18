'use strict';
// msgオブジェクトからユーザのidを受け取り、「Hello, @あなたのユーザーID」と発言をする
module.exports = robot => {
	// ここは正規表現になっており、大文字小文字を問わずhello>という文字にマッチし、マッチしたら次にわたす無名関数を実行する
	robot.hear(/hello>/i, msg => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/おみくじ/, msg => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const user_id = msg.message.user.id;
		msg.send(`<${lot}>, <@${user_id}>`);
	});
};
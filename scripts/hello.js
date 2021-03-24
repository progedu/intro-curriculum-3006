'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
	const items　= ['スマホ', 'ハンカチ', 'メガネ', '5円玉', 'シャーペン', '赤色のマーカーペン'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
	const item = items[Math.floor(Math.random() * items.length)];
    msg.send(
		`<@${user_id}>の運勢は、${lot},です。
		ラッキーアイテムは、${item}です。`
		);
  });
};
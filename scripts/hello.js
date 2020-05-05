'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, msg => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	  });
	robot.hear(/おみくじ/i, msg => {
		const results = [
			{'lot': '大吉', 'emoji': ':laughing:'},
			{'lot': '吉', 'emoji': ':slightly_smiling_face:'},
			{'lot': '中吉', 'emoji': ':neutral_face:'},
			{'lot': '末吉', 'emoji': ':face_with_raised_eyebrow:'},
			{'lot': '凶', 'emoji': ':persevere:'}
		]
		const result = results[Math.floor(Math.random() * results.length)];
		const user_id = msg.message.user.id
		msg.send(`${result.lot}${result.emoji}, <@${user_id}>`);
	});
	robot.hear(/ラッキーカラー/i, msg => {
		const colors = ['red', 'blue', 'green', 'yellow', 'black', 'white'];
		const color = colors[Math.floor(Math.random() * colors.length)];
		const user_id = msg.message.user.id
		msg.send(`<@${user_id}>のラッキーカラーは、${color}です`);
	});
};

'use strict';
// module.exports = (robot) => {
	// robot.hear(/hello>/i, (msg) => {
		//  const user_id = msg.message.user.id;
		//  msg.send('Hello, <@${user_id}>');
	//  });
// 
	// robot.hear(/おみくじ/i, msg => {
		// const user_id = msg.message.user.id;
		// const lots = ['大吉 赤い物を食べよう', '吉 黄色の文具を持とう', '中吉 白い小物を使おう', '末吉 青い洋服を着よう', '凶 ールドのアクセサリーをつけよう'];
		// const lot = lots[Math.floor(Math.random() * lots.length)];
		// msg.send(`${lot}, <@${user_id}>`);
	// });
// };

module.exports = robot => {
	robot.hear(/hello>/i, msg => {
		const user_id = msg.message.user.id;
		msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/おみくじ/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`${lot}, <@${user_id}>`);
	});
};
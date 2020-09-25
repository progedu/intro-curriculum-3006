'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
	});
	//おみくじ
  robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
	});
	//じゃんけん
	robot.hear(/じゃんけん/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`「グー」、「チョキ」、「パー」どれにする？, <@${user_id}>`);
	});
	robot.hear(/グー/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['グー！あいこです。もう一回！', 'チョキ！おめでとう！あなたの勝ち！', 'パー！私の勝ち。またチャレンジしてね',];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
	});
	robot.hear(/チョキ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['グー！私の勝ち。またチャレンジしてね', 'チョキ！あいこです。もう一回！', 'パー！おめでとう！あなたの勝ち！',];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
	});
	robot.hear(/パー/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['グー！おめでとう！あなたの勝ち！', 'チョキ！私の勝ち。またチャレンジしてね', 'パー！あいこです。もう一回！',];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};
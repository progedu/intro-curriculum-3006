'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello Hello, <@${user_id}>`);
	});
	
  robot.hear(/bye>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`BYE_BYE, <@${user_id}>`);
	});
	
  robot.hear(/おみくじ/i, msg => {
		const user_id = msg.message.user.id;
		const lots =['大吉', '吉', '中吉', '末吉', '凶', '大凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}ぜよ, <@${user_id}>`);
	});
	
  robot.hear(/名前占い>(.*)/i, msg => {
		const user_id = msg.match[1];
		// console.log(msg);
		const answers =[
			'のいいところは声です。',
			'のいいところはまなざしです。',
			'のいいところは情熱です。',
			'のいいところは厳しさです。',
			'のいいところは知識です。',
			'のいいところはユニークさです。',
			'のいいところは用心深さです。',
			'のいいところは見た目です。',
			'のいいところは決断力です。',
			'のいいところは思いやりです。',
			'のいいところは感受性です。',
			'のいいところは節度です。',
			'のいいところは好奇心です。',
			'のいいところは気配りです。',
			'のいいところはその全てです。',
			'のいいところは自制心です。',
			'のいいところは勇気です。',
			'のいいところは慈愛です。',
			'のいいところは純真です。',
			'のいいところは闘志です。',
			'のいいところは正義です。'
		];
		let sumOfCharCode = 0;
		for (let i = 0; i < user_id.length; i++) {
			sumOfCharCode += user_id.charCodeAt(i);
		}
		const index = sumOfCharCode % answers.length;
		let result = answers[index];
    msg.send(`${user_id}${result}です。です。。。`);
	});
};
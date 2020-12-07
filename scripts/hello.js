'use strict';

module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/こんにちは/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`こんにちは！ <@${user_id}>。元気？`);
	});
	robot.hear(/元気/i, msg => {
    const user_id = msg.message.user.id;
    msg.send('それはよかった！');
	});
	robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}です。 <@${user_id}>`);
	});
};
'use strict';
module.exports = robot => {
  robot.hear(/こんにちは/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['大吉', '吉', '中吉', '末吉', '超大吉']
		const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
};
'use strict';
module.exports = robot => {
  robot.hear(/hello>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
	});
	robot.hear(/bye>/i, msg => {
    const user_id = msg.message.user.id;
    msg.send(`Bye Bye, <@${user_id}>`);
	});
	robot.hear(/きょうは/i, msg => {
		const user_id = msg.message.user.id;
		const lots = ['賞賛', '罵倒', '同情', '寂しく', '自由に', 'つらく', '険しく'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`きょうは${lot}されるかも <@${user_id}>`);
  });
};
'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/おみくじ/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ['アボカド', '納豆', 'ラーメン', '豆乳鍋', 'カツカレー'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`<@${user_id}>さん、今夜は${lot}食べましょう！`);
  });
};

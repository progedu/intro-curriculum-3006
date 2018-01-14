'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
  const username = msg.message.user.name;
    msg.send('Hell, ' + username);
  });

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
  const lots = ['大吉', '中吉', '吉', '末吉', '凶'];
  const comments = ['めっちゃラッキー！！！', 'ラッキー！', 'まあまあ', '悪くない', 'Good Luck!'];
  const lotnum = Math.floor(Math.random() * lots.length);
  const lot = lots[lotnum] + comments[lotnum];
		msg.send(lot + ', ' + username);
	});
};

'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/おみくじ/i, msg => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const films = ['ショーシャンクの空に', 'ライフ・イズ・ビューティフル', 'プラダを着た悪魔', 'キングスマン', 'ラ・ラ・ランド']
    const film = films[Math.floor(Math.random() * films.length)];

    msg.send(`${lot}でした！ 今日は ${film} がおすすめです。`);
  });
};
'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ',' + username);
	});

	robot.hear(/sai>/i, (msg) => {
		const username = msg.message.user.name;
		const sais = ['1', '2', '3', '4', '5', '6'];
		const sai = sais[Math.floor(Math.random() * sais.length)];
		msg.send(sai + 'マス進め！' + username);
	});

	robot.hear(/gu>/i, (msg) => {
		const username = msg.message.user.name;
		const gus = ['わかめ', 'とうふ', 'なめこ', 'ねぎ', '大根', '油揚げ', '具なし'];
		const gu = gus[Math.floor(Math.random() * gus.length)];
		msg.send('次のお味噌汁の具は、' + gu + 'でお願いします。' + username + "様");
	});
};

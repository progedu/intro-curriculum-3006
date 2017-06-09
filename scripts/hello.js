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
		msg.send(lot + ' , '+ username);
	});

	robot.hear(/ship type>/i, (msg) => {
		const username = msg.message.user.name;
		const ships = ['装甲空母', '正規空母', '軽空母', '戦艦', '重巡洋艦' , '軽巡洋艦' , '駆逐艦' , '海防艦' , '重雷装巡洋艦' , '練習巡洋艦' , '補給艦' , '工作艦' , '水上機母艦' , '潜水艦' , '潜水母艦' , '潜水空母' , '航空巡洋艦' , '深海棲艦' , '提督'];
		const ship = ships[Math.floor(Math.random() * ships.length)];
		msg.send(username + 'は' + ship + 'です');
	});　　//お遊び

};


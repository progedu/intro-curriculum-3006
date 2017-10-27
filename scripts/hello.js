'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉','凶']
		const lot = lots[Math.floor(Math.random() * lots.length)]; 
		msg.send(lot + ','  + username);
	});

	robot.hear(/google>/i, (msg) => {
        msg.send('https://www.amazon.co.jp/');
	});
	
	robot.hear(/夕飯>/i, (msg) => {
		const dinners = ['チャーハン', 'カレー', 'おでん', '牛丼','寿司', 'すき焼き']
		const dinner = dinners[Math.floor(Math.random() * dinners.length)]; 
		msg.send(dinner);
	});

	//TODO xdyの実装
	robot.hear(/サイコロ>/i, (msg) => {
		//数字不可
		const sais = ['1','2','3','4','5','6']
		const sai = sais[Math.floor(Math.random() * sais.length)]; 
		msg.send(sai);
	});
};

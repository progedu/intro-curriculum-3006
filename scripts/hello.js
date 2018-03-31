'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['ホームラン', '三振', '三塁打', '二塁打', '単打','内野フライ','外野フライ','ゴロアウト','四死球'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(lot + ',' + username);
	});	
};





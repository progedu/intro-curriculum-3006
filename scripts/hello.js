'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots =['大吉','吉','中吉','末吉','凶'];
		const lot = lots[Math.floor(Math.random()*lots.length)];
		const colors =['赤色','青色','黄色','紫色','白色'];
		const color = colors[Math.floor(Math.random()*colors.length)];
		msg.send(lot + ', ラッキーカラーは' + color + 'です,' + username);
	});

};


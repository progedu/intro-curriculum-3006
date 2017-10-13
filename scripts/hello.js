'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
    });
	
		robot.hear(/lot>/i, (msg) => {
			const username = msg.message.user.name;
			const dai = '大吉';
			const kichi = '吉';
			const chu = '中吉';
			const sue = '末吉';
			const kyo = '凶';
			const omi = new Map();
			omi.set(0,dai);
			omi.set(1, kichi);
			omi.set(2, chu);
			omi.set(3, sue);
			omi.set(4, kyo);
			var random = Math.floor( Math.random () * 5);
			const result = (omi.get(random) + ', ' +username);
			msg.send(result);
		});
	};
	
	
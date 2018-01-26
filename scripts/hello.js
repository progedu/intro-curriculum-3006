'use strict'; //2018/01/22、再トライ！
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大当たり', '当たり', 'まぁマァ', '気にすんな', '世も末！'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
    });
};


'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
    robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        let saikoro = Math.floor(Math.random()*5);
        const unsei = ["大吉","吉","中吉","末吉","凶"];
        msg.send(unsei[saikoro] +','+ username);
    });
};

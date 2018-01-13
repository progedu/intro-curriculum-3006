'use strict';
module.exports = (robot) => {
    robot.hear(/hello/i,(msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });

	robot.hear(/lot/, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉','吉','中吉','末吉','凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + 'じゃよ, ' + username + 'さん');
    });

    robot.hear(/今日の晩御飯/i, (msg) => {
        const username = msg.message.user.name;
        const candidates = ["寿司","肉","魚","野菜"];
        const candidate = candidates[Math.floor(Math.random() * candidates.length)];
        msg.send(candidate + 'がよいのでは？');
    });
};

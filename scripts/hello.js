'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        let username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
};
module.exports = (robot) => {
    robot.hear(/lot>/i, (msg) => {
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        let username = msg.message.user.name;
        msg.send(lot + ',' + username);
    });
};

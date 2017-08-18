'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉', '中吉', '吉', '小吉', '凶', 'さいたま', ];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ", " + username);
    });
};
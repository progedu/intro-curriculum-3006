'use strict';
const lots = ['大吉','中吉', '小吉', '末吉','凶'];
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send("Hello, " + username);
    });
    robot.hear(/lot>/i, (msg) => {
        const lot = lots[Math.floor(Math.random() * lots.length)];
        const username = msg.message.user.name;
        msg.send(lot + ", " + username);
    });
};


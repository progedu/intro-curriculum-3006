'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/money>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['100億円GET', '１億円GET', '100万円GET', '1万円GET', '1円GET'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
    });
};
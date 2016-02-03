(function () {
    'use strict';
    module.exports = (robot) => {
        robot.hear(/hello>/i, (msg) => {
            let username = msg.message.user.name;
            msg.send('Hello, ' + username);
        });
        robot.hear(/lot>/i, (msg) => {
            let username = msg.message.user.name;
            const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
            let lot = lots[Math.floor(Math.random() * lots.length)];
            
            msg.send(lot + ', ' + username);
        });
    };
})();
'use strict';
module.exports = (robot) => {
    robot.hear(/lot>/i, (msg) => {
        
        const lots=['大吉','吉','中吉','末吉','凶'];
        const lot=lots[Math.floor(Math.random()*lots.length)];

        const username = 'magudon';

        msg.send(lot+','+ username);
    });


};
'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const user_id = msg.message.user.id;
        msg.send(`Hello, <@${user_id}>`);
    });
    robot.hear(/omikuji/i, (msg) => {
        const user_id = msg.message.user.id;
        const lots = ['great fortune', 'fortune', 'middle fortune', 'future fortune', 'curse'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot}, <@${user_id}`);
    });
};

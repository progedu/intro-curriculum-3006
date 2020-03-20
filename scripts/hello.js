'use strict';
module.exports = (robot) => {
    robot.hear(/おみくじ/i, (msg) => {
        const user_name = msg.message.user.name;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`おまえは${lot}だ！ <@${user_name}>`);
    });
};

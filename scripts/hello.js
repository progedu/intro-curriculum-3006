'use strict';
module.exports = robot => {
    robot.hear(/おはよう/i, msg => {
        const user_id = msg.message.user.id;
        msg.send(`もう昼だよ(笑), <@${user_id}>`);
    });
    robot.hear(/おみくじ/i, msg => {
        const user_id = msg.message.user.id;
        const lots = ['やったね　大吉だよ', 'よかったね　吉だよ', 'まあまあかな　中吉です', 'とりあえず　末吉ね', 'あらら　凶だ'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot}, <@${user_id}>`);
    });
};

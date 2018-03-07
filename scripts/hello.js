'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/あいさつ/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['こんにちは', 'ハロー', 'アンニョンハセヨ', 'ニーハオ', 'ぼんじゅーる'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
    });
};
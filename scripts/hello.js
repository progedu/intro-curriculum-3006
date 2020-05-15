'use strict';
module.exports = (robot) => {
    // Way to use Hubot API
    robot.hear(/hello>/i, (msg) => {
        const user_id = msg.message.user.id;
        //　mention user ID
        msg.send(`Hello, <@${user_id}>`);
    });

    // generate random name
    robot.hear(/おみくじ/i, (msg) => {
        const user_id = msg.message.user.id;
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(`${lot}, <@${user_id}>`);
     });

    // just a test
    robot.hear(/salam kirim>/i, (msg) => {
        const user_id = msg.message.user.id;
        //　mention user ID
        msg.send(`Salam kirim balek, <@${user_id}>`);
    });

    robot.hear(/annoy me>/i, (msg) => { 
        msg.send(`AAAAAAAAAAAAAAAAAAAAAAAABWEBWEBWEBWE`);
    });
    
};



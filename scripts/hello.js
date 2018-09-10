'use strict';

module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) =>{
        const username = msg.message.user.name;
        msg.send('おはよ, ' + username);
    });
    robot.hear(/lot>/i, (msg) =>{
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        let omikuzi_content;
        const username = msg.message.user.name;

        switch (lot) {
            case '大吉':
            omikuzi_content = 'ですよ〜かつてない素晴らしい１日になります！！！(⋈◍＞◡＜◍)。✧♡'
                break;
            case '中吉':
            omikuzi_content = 'ですよ〜今日も素晴らしい１日になりますぞ！＼＼\\(۶•̀ᴗ•́)۶//／／'
                break;
            case '吉':
            omikuzi_content = 'ですよ〜まぁまぁな１日になりますが普通が１番難しい！=͟͟͞͞٩(๑☉ᴗ☉)੭ु⁾⁾'
                break;
            case '末吉':
            omikuzi_content = 'ですよ〜少し気が緩んでいるので気持ちを引き締めていこー！٩(๑❛ᴗ❛๑)۶'
                break;
            case '凶':
            omikuzi_content = 'ですよ〜逆レア！！！特に語ることはなしっ！！！(⑅∫°ਊ°)∫'
                break;
        }
        msg.send( username + 'さん ,' +  'あなたの運勢は' + lot + omikuzi_content);
    });
};


`use strict`
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });

    robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉', '吉', '中吉',　'末吉',　'凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        if(lot === lots[0]){
            msg.send(username + 'さんの運勢は……' + lot + 'だよ！宝くじ買いに行こう！');
        }else if(lot === lots[1]){
            msg.send(username + 'さんの運勢は……' + lot + 'だよ。いいことありそうだね。');
        }else if(lot === lots[2]){
            msg.send(username + 'さんの運勢は……' + lot + 'だよ。なかなかいい運勢だね。');
        }else if(lot === lots[3]){
            msg.send(username + 'さんの運勢は……' + lot + 'だよ。まあまあだね。');
        }else{
            msg.send(username + 'さんの運勢は……' + lot + 'だよ。まあこんなこともあるさ。');
        }
    })
};
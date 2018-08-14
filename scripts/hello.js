'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('Hello, ' + username);
    });
    robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
			//Math.random() -> 0~0.9999...までの値をランダムで返す
			//lots.length -> 配列の要素数｡ここでは5
			//Math.floor -> 小数点以下を捨てる
			//結果:0~0.99 * 5 = 0~4.99 -> 0~4 を lots の引数に｡lotsの配列いずれかを変数lotに代入
        msg.send(lot + ', ' + username);
    });
};

/*環境設定
npm install -g yo@1.8.5
npm install -g generator-hubot
npm install -g coffee-script@1.12.4

chmod a+x bin/hubot
bin/hubot
*/
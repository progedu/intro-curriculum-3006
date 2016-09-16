// ラッキーカラー診断で使う
function doubleDigots(num){
    if (num < 16) return "0" + num.toString(16);
    else return num.toString(16);
}

(function () {
    'use strict';
    　//　あいさつ機能 
    module.exports = (robot) => {
        robot.hear(/hello>/i, (msg) => {
            const username = msg.message.user.name;
            msg.send('Hello, ' + username);
        });

      // おみくじ機能  
        robot.hear(/lot>/i, (msg) => {
            const username = msg.message.user.name;
            const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
            const lot = lots[Math.floor(Math.random() * lots.length)];
            msg.send(lot + ', ' + username);
        });
  
     　// ラッキーカラー診断
        robot.hear(/color>/i, (msg) => {
            const username = msg.message.user.name;
           const r = Math.floor(Math.random() * 255 );
            const g = Math.floor(Math.random() * 255 );
            const b = Math.floor(Math.random() * 255 );
            msg.send(username + 'さんのラッキーカラーは: #' + doubleDigots(r) + doubleDigots(g) + doubleDigots(b) );
        });
        
       // エヴァのMAGIシステムもどき
        robot.hear(/magi>/i, (msg) => {
            const username = msg.message.user.name;
            const lots = ['承認', '否定'];
            const merchior = lots[Math.floor(Math.random() * lots.length)];
            const balthasar = lots[Math.floor(Math.random() * lots.length)];
            const casper = lots[Math.floor(Math.random() * lots.length)];
            msg.send( ' >' + username + '\r\nMERCHIOR--1 : '+ merchior + '\r\nBALTHASAR-2 : ' + balthasar + '\r\nCASPER ------3 : ' + casper ) ;
       });
    };
})();
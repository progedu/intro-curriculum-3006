(function () {
    'use strict';
    module.exports = (robot) => {
        robot.hear(/hello>/i, (msg) => {
            const username = msg.message.user.name;
            msg.send('Hello, ' + username);
        });
        robot.hear(/lot>/i, (msg) => {
            const username = msg.message.user.name;
            const lots = ['大吉', '吉', '中吉', '末吉', '凶'
/*
		'タイヤがいつもより丸い',
		'新大陸を発見',
		'バスの後ろをおかんが泣きながら走ってきてもう3県目になる',
		'落とし穴に落ちつつ',
		'ゴムの力で帰宅' ,
		'「このじゃらん何もいい案内載ってないなぁ」と思ってたら じゃらんじゃなく俺の姉ちゃんの商業高校の卒アルだった',
		'キノコのおいしさに笑いが止まらない',
		'玄関を出て一歩目で靴ヒモが全部切れた',
		'交換日記がいつも一日で終わる',
		'旅館の売店に「◯◯へ行ってきました」っていう菓子しかない',
		'ごめんなさい lot> の時どんなコメントしたら良いかわからないの'
*/
            ];
            const lot = lots[Math.floor(Math.random() * lots.length)];
            msg.send(lot + ', ' + username);
        });
    };
})();
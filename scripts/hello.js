'use strict';

// module.exportsに関数やオブジェクトを登録
// 他のスクリプトから呼び出せるようにする
module.exports = (robot) => {

	// hello>と入力したらHelloと返す
	robot.hear(/hello>/i, (msg) => {
		// 大文字小文字どちらでもマッチさせる
		// マッチしたら無名関数を実行
		// msgオブジェクトのプロパティ参照する
		const username = msg.message.user.name;
		// ユーザー名の前に@をつけるとメンションを飛ばす
		msg.send('Hello, @' + username);
	});
	// 練習問題のおみくじ
	robot.hear(/lot>/i, (msg) => {
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = msg.message.user.name;
		msg.send(lot + ', @' + username);
	});

};
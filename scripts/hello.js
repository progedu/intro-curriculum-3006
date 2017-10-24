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
		msg.send(lot + ', ' + username);
	});
	robot.hear(/friends>/i, (msg) => {
		const username = msg.message.user.name;
		const friends = [
			'サーバル',
			'アライグマ',
			'フェネック',
			'コツメカワウソ',
			'ジャガー',
			'トキ',
			'アルパカ・スリ',
			'ショウジョウトキ',
			'スナネコ',
			'ツチノコ',
			'アメリカビーバー',
			'オグロプレーリードッグ',
			'ライオン',
			'ヘラジカ',
			'オーロックス',
			'アラビアオリックス',
			'ニホンツキノワグマ',
			'パンサーカメレオン',
			'ハシビロコウ',
			'オオアルマジロ',
			'アフリカタテガミヤマアラシ',
			'シロサイ',
			'アフリカオオコノハズク',
			'ワシミミズク',
			'ロイヤルペンギン',
			'イワトビペンギン',
			'ジェンツーペンギン',
			'フンボルトペンギン',
			'コウテイペンギン',
			'マーゲイ',
			'ギンギツネ',
			'キタキツネ',
			'アリツカゲラ',
			'タイリクオオカミ',
			'アミメキリン',
			'キンシコウ',
			'ヒグマ',
			'リカオン'
		];
		const friend = friends[Math.floor(Math.random() * friends.length)];
		msg.send(friend + ', ' + username);
	});
};

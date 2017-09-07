'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
    const username = msg.message.user.name;
    const lots = ['grep', 'chmod', 'history', 'pwd', 'kill'];
    const descriptions = ['文字列を検索', 'アクセス権を変更', 'コマンド実行履歴を表示', 'カレントディレクトリを表示', 'プロセスを終了'];
    const num = Math.floor(Math.random() * lots.length);
    const lot = lots[num];
    const description = descriptions[num];
    msg.send(`今日の${username}のラッキーコマンドは${lot}です！入力すると${description}してくれます。`);
  });
};

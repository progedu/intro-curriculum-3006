'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/lot>/i, (msg) => {
    const username = msg.message.user.name;
    const lots = [['grep', '文字列を検索'], ['chmod', 'アクセス権を変更'], ['history', 'コマンド実行履歴を表示'], ['pwd', 'カレントディレクトリを表示'], ['kill', 'プロセスを終了']];
    const num = Math.floor(Math.random() * lots.length);
    const lot = lots[num][0];
    const description = lots[num][1];
    msg.send(`今日の${username}のラッキーコマンドは${lot}です！入力すると${description}してくれます。`);
  });
};

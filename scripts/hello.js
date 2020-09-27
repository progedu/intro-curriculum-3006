module.exports = (robot) => {
	robot.hear(/サイコロ>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['1', '2', '3', '4', '5','6'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`サイコロの出目は` + lot + "です");
	
	});

	robot.hear(/おみくじ>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(`今日の${username}の運勢は` + lot + "です");
	
	});

	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
};
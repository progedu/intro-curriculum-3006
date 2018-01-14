'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});
	robot.hear(/fortune>/i, (msg) => {
		const username = msg.message.user.name;
		const fortunes = ['very good luck','good luck','soso','bad luck','extremely bad luck'];
		const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
		msg.send('Hello, ' + username + 'さんの今日の運勢は' + fortune +　'です。今日も頑張りましょう！' );
	});
};

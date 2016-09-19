'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send(' お帰りなさいませ ' + username + ' 様');
	});

	robot.hear(/lot>/i, (msg) => {
		const username = msg.message.user.name;
		const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		msg.send(username + ' 殿、  私には見える。そなたの今日の運勢は、 ' + lot + ' と出ておるぞ。　じゃが、占いなんぞに頼らんと、今日も一日、頑張るのじゃぞ！！ ');
	});

	robot.hear(/eat>/i, (msg) => {
		const username = msg.message.user.name;
		const eats = ['ごはん', 'パン', 'パスタ', '風呂', 'それとも、わ・た・し・・・うふふ'];
		const eat = eats[Math.floor(Math.random() * eats.length)];
		msg.send(username + ' 様。今日の夕食は、 ' + eat + ' を、お召し上がりください。 ');
	});

};

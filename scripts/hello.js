'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	//練習
	robot.hear(/今日の一言/i, (msg) => {
		//hear：発言を受け取る
		//　/hello>/i：これは正規表現で、大文字小文字を問わず hello> という文字にマッチし、 もしマッチしたら次に渡す無名関数を実行せよという形式となっています。
		const user_id = msg.message.user.id;
		const lots = [`常識は、敵だ。
  
		`,
		`絶対の強さは、
		 時に人を退屈させる。
		
		`,
		`天才はいる。悔しいが。
		
		`,
		`可能性は人を熱くする。
		
		`,
		`速さは、自由か孤独か。
		
		`,
		`群れに答えなどない。
		
		`,
		`本当の敵は、諦めだ。
		
		`,
		`僕らは、
		 ひとりでは強くなれない。
		
		`,
		`神はいる。そう思った。
	  
		`];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		//console.log(msg);
		msg.send(`${lot}, <@${user_id}>`);//send：発言する
	});
};
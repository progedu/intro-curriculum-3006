'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello, ' + username);
	});

	robot.hear(/おみくじ/i,(msg)=>{
		const username = msg.message.user.name;
        const lots=['大吉','吉','中吉','末吉','凶'];
        const lot=lots[Math.floor(Math.random()*lots.length)];//Math.randomは０以上1未満の数をランダムで返す。
        //これにlots.lengthすなわち５を掛け、Math.floorで小数点以下を切り捨てる。結果、0から4までの整数をランダムに得て、これを配列から選ぶことで運勢を得る。
		//console.log(lot)
		msg.send(`${username}様の今日の運勢は、${lot}です。`);
    })
};

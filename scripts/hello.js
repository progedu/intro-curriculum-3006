'use strict';
module.exports = (robot) => {
	robot.hear(/hello>/i, (msg) => {
		const username = msg.message.user.name;
		msg.send('Hello'+','+ username);
	});
};

module.exports =(robot) =>{
	robot.hear(/おみくじ/i,(kuzi)=>{
		const lots =['大吉', '吉', '中吉', '末吉', '凶'];
		const lot = lots[Math.floor(Math.random() * lots.length)];
		const username = kuzi.message.user.name;
		kuzi.send(lot +',' +username);
	});
};
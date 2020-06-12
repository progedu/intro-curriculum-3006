'use strict';
module.exports = robot2 => {
	robot2.hear(/kuzi>/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`hi, <@${lot}>`);
	});
};

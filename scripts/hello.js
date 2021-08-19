"use strict";
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const username = msg.message.user.name;
    msg.send("Hello, " + username);
  });
  robot.hear(/おみくじ/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ["大吉", "吉", "中吉", "末吉", "凶"];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot},<@${user_id}>`);
  });
};

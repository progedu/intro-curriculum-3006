"use strict";
module.exports = robot => {
  const lots = ["大吉", "吉", "中吉", "末吉", "凶"];
  robot.hear(/おみくじ/i, msg => {
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const username = msg.message.user.name;
    msg.send(lot + ", " + username);
  });
};

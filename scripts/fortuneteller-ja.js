"use strict";
module.exports = robot => {
  robot.hear(/おみくじ>/i, msg => {
    const username = msg.message.user.name;
    const lots = [
      "大吉",
      "中吉",
      "小吉",
      "吉",
      "半吉",
      "末吉",
      "末小吉",
      "凶",
      "小凶",
      "半凶",
      "末凶",
      "大凶"
    ];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(lot + ", " + username);
  });
};

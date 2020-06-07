"use strict";
module.exports = (robot) => {
  robot.hear(/おみくじ/i, (msg) => {
    const username = msg.message.user.name;
    const lots = [
      "赤",
      "青",
      "黄色",
      "緑",
      "茶色",
      "黒",
      "白",
      "紫",
      "オレンジ",
      "ピンク",
      "黄緑",
    ];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`今日のラッキーカラーは、${lot}です！ @${username}`);
  });
};

"use strict";
module.exports = robot => {
  robot.hear(/fortune>/i, msg => {
    const lots = ["best", "good", "ok", "umm...", "bad"];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    const user_id = msg.message.user.id;
    msg.send(lot + lot + `, <@${user_id}>`);
  });
};

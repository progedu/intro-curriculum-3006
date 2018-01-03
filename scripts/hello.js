// Description:
//   Messing around with the today API.
// Commands:
//   hubot hello
//   hubot lot
'use strict'
module.exports = robot => {
  const userDisplayName = msg =>
    msg.message.user.profile.display_name || msg.message.user.profile.real_name

  robot.hear(/hello>/i, msg => {
    msg.send(`Hello, ${userDisplayName(msg)}`)
  })
  
  robot.hear(/lot>/i, msg => {
    const lots = ['大吉', '吉', '中吉', '末吉', '凶']
    const lot = lots[Math.floor(Math.random() * lots.length)]
    msg.send(`${lot}, ${userDisplayName(msg)}`)
  })
}

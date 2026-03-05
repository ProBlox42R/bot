const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: "aleks123.aternos.me", // server IP
  port: 24483,
  username: "AFK_Bot",
  version: false // auto detect version
})

bot.on('login', () => {
  console.log("✅ Bot logged in")
})

bot.on('spawn', () => {
  console.log("🌍 Spawned")

  setInterval(() => {
    const actions = ['forward','back','left','right']
    const action = actions[Math.floor(Math.random()*actions.length)]

    bot.setControlState(action, true)

    setTimeout(() => {
      bot.setControlState(action, false)
    }, 2000)

  }, 5000)
})

bot.on('end', () => {
  console.log("❌ Disconnected. Reconnecting in 5s...")
  setTimeout(() => {
    process.exit()
  }, 5000)
})

bot.on('error', err => console.log("Error:", err))
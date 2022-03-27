let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait reading Info!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
❑ *Bot Name* ZeroTwo
❑ *Version:* 0.1.0
❑ *Wa Web version:* 10.0
❑ *Wa web Name:* SERVER TOSHIRO
❑ Hey I'm ZeroTwo made with Language Javascript And Via Node.js by Toshiro
❑ *Total user:* ${totalreg} *user*
❑ *Uptime:* ${uptime}
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

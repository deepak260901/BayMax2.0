let fetch = require('node-fetch')

 let timeout = 120000
 let points = 4999
 let src
 let handler = async(m, { conn, usedPrefix }) => {
     conn.guess the flag = conn.guess the flag ?  conn.guess the flag : {}
     let id = m.chat
     if (id in conn.tebakflag) {
         conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakflag[id][0])
         throw false
     }
     if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakflag.json'))).json()
     let json = src[Math.floor(Math.random() * src.length)]
     if (!json) throw json
     let caption = `
 Timeout *${(timeout / 1000).toFixed(2)} seconds*
 Type ${usedPrefix}what flag for help
 Bonus: ${points} XP
 `.trim()
     conn.guessflag[id] = [
         await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
         json, points,
         setTimeout(() => {
             if (conn.tebakflag[id]) conn.reply(m.chat, `Time is up!\nThe answer is *${json.name}*`, conn.tebakflag[id][0])
             delete conn.tebakflag[id]
         }, timeout)
     ]
 }
 handler.help = ['guess the flag']
 handler.tags = ['game']
 handler.command = /^guess the flag/i

 module.exports = handler

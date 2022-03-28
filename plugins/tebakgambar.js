let fetch = require('node-fetch')

 let timeout = 120000
 let points = 500
 let src
 let handler = async(m, { conn, usedPrefix }) => {
   conn.guess the picture = conn.guess the picture ?  conn.guessimage : {}
   let id = m.chat
   if (id in conn.tebak Gambar) {
     conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebak Gambar[id][0])
     throw false
   }
   if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakimage.json'))).json()
   let json = src[Math.floor(Math.random() * src.length)]
   if (!json) throw json
   let caption = `
 Timeout *${(timeout / 1000).toFixed(2)} seconds*
 Type ${usedPrefix}hint for hint
 Bonus: ${points} XP
     `.trim()
   conn.guessimage[id] = [
     await conn.sendFile(m.chat, json.img, 'tebak Gambar.jpg', caption, m, false),
     json, points,
     setTimeout(() => {
       if (conn.guessimage[id]) conn.reply(m.chat, `Time is up!\nAnswer is *${json.answer}*`, conn.guessimage[id][0])
       delete conn.tebakimage[id]
     }, timeout)
   ]
 }
 handler.help = ['guess the image']
 handler.tags = ['game']
 handler.command = /^guessimage/i

 module.exports = handler

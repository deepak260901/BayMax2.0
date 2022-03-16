let fetch = require('node-fetch')

 let timeout = 120000
 let points = 500
 let src
 let handler = async(m, { conn, usedPrefix }) => {
     conn.caklontong = conn.caklontong ?  conn.caklontong : {}
     let id = m.chat
     if (id in conn.caklontong) {
         conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.caklontong[id][0])
         throw false
     }
     if (!src) src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
     let json = src[Math.floor(Math.random() * src.length)]
     let caption = `
 ${json.question}

 Timeout *${(timeout / 1000).toFixed(2)} seconds*
 Type ${usedPrefix}calo for help
 Bonus: ${points} XP
 `.trim()
     conn.caklontong[id] = [
         await conn.sendButton(m.chat, caption, author, 'Help', '.calo', m),
         json, points,
         setTimeout(async() => {
             if (conn.caklontong[id]) conn.sendButton(m.chat, `Time is up!\nThe answer is *${json.answer}*\n${json.description}`, author, 'Cak Lontong', '  .caklontong', conn.caklontong[id][0])
             delete conn.caklontong[id]
         }, timeout)
     ]
 }
 handler.help = ['chocolate']
 handler.tags = ['game']
 handler.command = /^caklontong/i

 module.exports = handler
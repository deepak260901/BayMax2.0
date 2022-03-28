let fetch = require('node-fetch')

 let timeout = 120000
 let points = 500
 let src
 let handler = async(m, { conn, usedPrefix }) => {
     conn.guess the sentence = conn.guess the sentence ?  conn.guess sentence : {}
     let id = m.chat
     if (id in conn.tebakkalimat) {
         conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tebakkalimat[id][0])
         throw false
     }
     if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakkalimat.json'))).json()
     let json = src[Math.floor(Math.random() * src.length)]
     if (!json) throw json
     let caption = `
 *${json.question}*
 Timeout *${(timeout / 1000).toFixed(2)} seconds*
 Type ${usedPrefix}whatsword for help
 Bonus: ${points} XP
 `.trim()
     conn.guess sentence[id] = [
         await conn.reply(m.chat, caption, m),
         json, points,
         setTimeout(() => {
             if (conn.guess sentence[id]) conn.reply(m.chat, `Time is up!\nThe answer is *${json.answer}*`, conn.guess sentence[id][0])
             delete conn.tebakkalimat[id]
         }, timeout)
     ]
 }
 handler.help = ['guess the sentence']
 handler.tags = ['game']
 handler.command = /^guess the sentence/i

 module.exports = handler

let handler = async(m, { conn, text }) => {
   conn.reply(m.chat, `
 *Question:* ${m.text}
 *Answer:* ${pickRandom(['Yes','Maybe yes','Maybe','Probably not','No','No way'])}
 `.trim(), m, m.mentionedJid ?  {
     contextInfo: {
       mentionedJid: m.mentionedJid
     }
   } : { })
 }
 handler.help = ['what is <text>?']
 handler.tags = ['shells']
 handler.customPrefix = /(\?$)/
 handler.command = /^is/i
 handler.owner = false
 handler.mods = false
 handler.premium = false
 handler.group = false
 handler.private = false

 handler.admin = false
 handler.botAdmin = false

 handler.fail = null

 module.exports = handler

 function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
 }

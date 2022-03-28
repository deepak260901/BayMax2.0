const similarity = require('similarity')
 const threshold = 0.72
 let handler = m => m
 handler.before = async function (m) {
     let id = m.chat
     if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*what flag/i.test(m.quoted.text)) return !0
     this.guess the flag = this.guess the flag ?  this.guess the flag : {}
     if (!(id in this.tebakflag)) return m.reply('The question has ended')
     if (m.quoted.id == this.tebakflanda[id][0].id) {
         let json = JSON.parse(JSON.stringify(this.tebakflag[id][1]))
         // m.reply(JSON.stringify(json, null, '\t'))
         if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
             global.DATABASE._data.users[m.sender].exp += this.tebakflag[id][2]
             m.reply(`*Correct!*\n+${this.tebakflag[id][2]} XP`)
             clearTimeout(this.tebakflag[id][3])
             delete this.tebakflag[id]
         } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*A little more!*`)
         else m.reply(`*False!*`)
     }
     returns !0
 }
 handler.exp = 0

 module.exports = handler

const similarity = require('similarity')
 const threshold = 0.72
 module.exports = {
     async before(m) {
         let id = m.chat
         if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*teli/i.test(m.quoted.text)) return !0
         this.tebaklirik = this.tebaklirik ?  this.tebaklirik : {}
         if (!(id in this.tebaklirik)) return m.reply('The question has ended')
         if (m.quoted.id == this.tebaklirik[id][0].id) {
             let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
             // m.reply(JSON.stringify(json, null, '\t'))
             if (m.text.toLowerCase() == json.answer.toLowerCase().trim()) {
                 global.DATABASE._data.users[m.sender].exp += this.tebaklirik[id][2]
                 m.reply(`*Correct!*\n+${this.tebaklirik[id][2]} XP`)
                 clearTimeout(this.tebaklirik[id][3])
                 delete this.tebaklirik[id]
             } else if (similarity(m.text.toLowerCase(), json.answer.toLowerCase().trim()) >= threshold) m.reply(`*A little more!*`)
             else m.reply(`*False!*`)
         }
         returns !0
     },
     experience: 0
 }

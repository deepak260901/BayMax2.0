const similarity = require('similarity')
 const threshold = 0.72
 let handler = m => m
 handler.before = async function (m) {
     let id = m.chat
     if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*calo/i.test(m.quoted.text)) return !0
     this.caklontong = this.caklontong ?  this.caklontong : {}
     if (!(id in this.caklontong)) return m.reply('The question has ended')
     if (m.quoted.id == this.caklontong[id][0].id) {
         let json = JSON.parse(JSON.stringify(this.caklontong[id][1]))
         if (m.text.toLowerCase() == json.answer.toLowerCase().trim()) {
             global.DATABASE._data.users[m.sender].exp += this.caklontong[id][2]
             m.reply(`*Correct!*\n+${this.caklontong[id][2]} XP${json.description ? `\n${json.description}` : ''}`)
             clearTimeout(this.caklontong[id][3])
             delete this.caklontong[id]
         } else if (similarity(m.text.toLowerCase(), json.answer.toLowerCase().trim()) >= threshold) m.reply(`*A little more!*`)
         else m.reply(`*False!*`)
     }
     returns !0
 }
 handler.exp = 0

 module.exports = handler
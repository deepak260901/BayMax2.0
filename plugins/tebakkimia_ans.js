const similarity = require('similarity')
const threshold = 0.72
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*riddle/i.test(m.quoted.text)) return !0
        this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
        if (!(id in this.tebakkimia)) return m.reply('The matter has ended')
        if (m.quoted.id == this.tebakkimia[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.guess chemistry[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
                global.DATABASE._data.users[m.sender].exp += this.guess chemistry[id][2]
                m.reply(`*Right!*\n+${this.guess chemistry[id][2]} XP`)
                clearTimeout(this.guess chemistry[id][3])
                delete this.guess chemistry[id]
            } else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold) m.reply(`*a little more!*`)
            else m.reply(`*Wrong!*`)
        }
        return !0
    },
    exp: 0
}

let handler = m => m
 handler.before = async function (m) {
     let id = m.chat
     if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/nTEBAK JUDUL SONG/i.test(m.quoted.text)) return
     conn.tebaklagu = conn.tebaklagu ?  conn.tebaklagu : {}
     if (!(id in conn.tebaklagu)) return m.reply('The question has ended')
     if (m.quoted.id == conn.tebaklagu[id][0].id) {
         let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))
         // m.reply(JSON.stringify(json, null, '\t'))
         if (m.text.toLowerCase() == json.title.toLowerCase()) {
             global.DATABASE._data.users[m.sender].exp += conn.tebaklagu[id][2]
             m.reply(`*Correct!*\n+${conn.tebaklagu[id][2]} XP`)
             clearTimeout(conn.tebaklagu[id][3])
             delete conn.tebaklagu[id]
         } else if (m.text.toLowerCase().endsWith(json.judul.split` ` [1])) m.reply(`*A little more!*`)
         else m.reply(`*False!*`)
     }
 }
 handler.exp = 0

 module.exports = handler

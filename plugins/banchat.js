let handler = async(m, { conn, participants }) => {
   // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
     if (!(m.chat in global.DATABASE._data.chats)) return m.reply('This chat is not registered in DATABASE!')
     let chat = global.DATABASE._data.chats[m.chat]
     if (chat.isBanned) return m.reply('This chat has been banned!')
     chat.isBanned = true
     m.reply('Done!')
   // } else m.reply('There is a host number here...')
 }
 handler.help = ['banchat']
 handler.tags = ['owner']
 handler.command = /^banchat$/i
 handler.mods = true

 module.exports = handler
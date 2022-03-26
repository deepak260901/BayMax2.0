let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Welcome successfully set\n@user (Mention)\n@subject (Group Title)')
  } else throw 'Where's the text??'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler


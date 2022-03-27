let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  let owner = '💠@' + m.chat.split`-`[0]
  let admins = participants.filter(u=> u.isAdmin && !u.isSuperAdmin).map(v=> v.jid).map(w=> '🧣@' + w.replace(/@.+/,'')).join`\n`
  let members = participants.filter(u=> !u.isAdmin && !u.isSuperAdmin).map(v=> v.jid).map(w=> '🧧@' + w.replace(/@.+/,'')).join`\n`
  m.reply(text + '\n' + owner + '\n' + admins + '\n' + members)
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^tagall$/i

handler.admin = true
handler.group = true

module.exports = handler

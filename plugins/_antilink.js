let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK DETECTED 」*\n\nDetected *${await this.getName(m.sender)}* you have sent the group link!\n\nSorry you will be kicked from this group byee:)!`)
    if (isAdmin) return m.reply('*Eh sorry Darling you are admin, you will not be kicked.  ಠ_ಠ*')
    if (!isBotAdmin) return m.reply('*I'm not admin, how can I kick people _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol Darling 😂 send your own group link :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`left ${global.DATABASE._data.users[who].limit} More Limits`)
}
handler.help = ['check limit']
handler.tags = ['xp']
handler.command = /^(ceklimit)$/i
module.exports = handler

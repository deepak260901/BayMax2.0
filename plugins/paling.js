let handler = async (m, { conn, text, participants, usedPrefix }) => {
    if (!text) throw `Example:\n${usedPrefix}the most beautiful`
    let member = participants.map(u => u.jid)
    let tagged = member[Math.floor(Math.random() * member.length)]
    let jawab = `The most ${text} here is @${tagged.replace(/@.+/, '')}`.trim()
    let mentionedJid = [tagged]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['paling <teks>']
handler.tags = ['']
handler.command = /^(paling)$/i

handler.limit = true

module.exports = handler

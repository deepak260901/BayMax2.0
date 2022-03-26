let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` *Hello👋 @${m.sender.split`@`[0]}_\n\n_Darling How are you😊*`])}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /Hello|Heya|hlo/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([` *Did you mean /help*`])}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /${usedPrefix}/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

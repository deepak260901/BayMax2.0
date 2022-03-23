let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let teks = `
${pickRandom([`conn.sendButton(m.chat,text.trim(), author,  pp,  [
['Ping',  '/ping'],
  ['Info',  '/info'],
  ['Owner',  '/owner']`])}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [m.sender] }})
}
handler.customPrefix = /^(menu|help|\?)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

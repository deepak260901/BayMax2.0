/* 
    Modifikasi by https://github.com/unx21
    tanpa button :)
*/
let timeout = 60000
let poin = 1000
let poin_lose = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Complete your previous suit'
  if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person.. Example\n\n${usedPrefix}suit @${owner[0]}`, m.chat, { contextInfo: { mentionedJid: [owner[0] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
      *「 SUIT PVP 」*

@${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit

Please @${m.mentionedJid[0].split`@`[0]}

Type "accept/ok/gas" to start suit\nKetik "refuse/cannot/later" to refuse
`.trim()
  conn.suit[id] = {
    chat: await conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Suit time out_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.help = ['suitpvp <@user>', 'suit2 <@users>']
handler.tags = ['games']
handler.command = /^suit(pvp|2)$/i
handler.limit = false
handler.group = true
handler.register = true

module.exports = handler

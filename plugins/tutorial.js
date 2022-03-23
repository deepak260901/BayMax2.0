let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutorial Main METRO BOT* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *${usedPrefix}claim*
│   Claimable starterpack
│   every 12 hours
│• *${usedPrefix}naughty*
│• *${usedPrefix}adventure*
│• *${usedPrefix}adventurer*
│   To find resources like
│ Money, Exp, etc...,required
│ at least 80 lives to get
│ do and, you don't
│ get spam because there is a delay of 5
│ minute
│• *${usedPrefix}use potion <jumlah>*
│    To use potions/for
│   fill life/health
│• *${usedPrefix}shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *${usedPrefix}use potion <jumlah>*
│   untuk menggunakan potion
│• *${usedPrefix}shop <args>*
│   Untuk membeli atau menjual sesuatu
│• *${usedPrefix}shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *${usedPrefix}profile*
│• *${usedPrefix}pp*
│• *${usedPrefix}profil*
│   untuk mengetahui No whatsapmu, dll
│• *${usedPrefix}inv*
│• *${usedPrefix}inventory*
│• *${usedPrefix}bal*
│   Untuk mengecek nyawa, money, dll.
│• *${usedPrefix}judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
│*©Metro Bot 2020-2021*
╰─「 *Tutorial Main METRO BOT* 」
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


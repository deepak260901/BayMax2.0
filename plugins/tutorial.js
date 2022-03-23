let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *🎮Game🎮* 」
│ 
│〘 EPIC RPG MENU 〙
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
│  To buy a potion and type 
│   *${usedPrefix}use potion <jumlah>*
│   to use potions
│• *${usedPrefix}shop <args>*
│   To buy or sell something
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
╰─「 *🎮GAME MENU🎮* 」
`.trim(), m)
}
handler.help = ['Game']
handler.tags = ['rpg']
handler.command = /^(game)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


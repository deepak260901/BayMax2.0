let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let healt = global.DATABASE._data.users[m.sender].healt
    let armor = global.DATABASE._data.users[m.sender].armor
    let warn = global.DATABASE._data.users[m.sender].warn
    let pet = global.DATABASE._data.users[m.sender].pet
    let kucing = global.DATABASE._data.users[m.sender].kucing
    let _kucing = global.DATABASE._data.users[m.sender].anakkucing
    let rubah = global.DATABASE._data.users[m.sender].rubah
    let _rubah = global.DATABASE._data.users[m.sender].anakrubah
    let kuda = global.DATABASE._data.users[m.sender].kuda
    let _kuda = global.DATABASE._data.users[m.sender].anakkuda
    let diamond = global.DATABASE._data.users[m.sender].diamond
    let potion = global.DATABASE._data.users[m.sender].potion
    let common = global.DATABASE._data.users[m.sender].common
    let makananpet = global.DATABASE._data.users[m.sender].makananpet
    let uncommon = global.DATABASE._data.users[m.sender].uncommon
    let mythic = global.DATABASE._data.users[m.sender].mythic
    let legendary = global.DATABASE._data.users[m.sender].legendary
    let level = global.DATABASE._data.users[m.sender].level
    let money = global.DATABASE._data.users[m.sender].money
    let exp = global.DATABASE._data.users[m.sender].exp
    let sampah = global.DATABASE._data.users[m.sender].sampah
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*

❤️Health: *${healt}*
🛡️Armor: *${armor == 0 ? 'Do not have' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
💵Money: *${money}*
〽️Level: *${level}*
🚀Exp: *${exp}*

*Inventory*
💎Diamond: *${diamond}*
⚗️Potion: *${potion}*
🗑️Rubbish: *${sampah}*
🌮Food Pet: *${makananpet}*
🎯Total inv: *${diamond + potion + rubbish + pet food}* item

*Crate*
🎁Common: *${common}*
🎁Uncommon: *${uncommon}*
🎁Mythic: *${mythic}*
🎁Legendary: *${legendary}*
🎁Pet: *${pet}*

*Pet*
🐴Horse: *${Horse == 0 ? 'Do not have' : '' || Horse == 1 ? 'Level 1' : '' || Horse == 2 ? 'Level 2' : '' || Horse == 3 ? 'Level 3' : '' || Horse == 4 ? 'Level 4' : '' || Horse == 5 ? 'Level MAX' : ''}*
🦊Fox: *${fox == 0 ? 'Do not have' : '' || Fox == 1 ? 'Level 1' : '' || Fox == 2 ? 'Level 2' : '' || Fox == 3 ? 'Level 3' : '' || Fox == 4 ? 'Level 4' : '' || Fox == 5 ? 'Level MAX' : ''}*
🐱Cat: *${cat == 0 ? 'Do not have' : '' || Cat == 1 ? 'Level 1' : '' || Cat == 2 ? 'Level 2' : '' || Cat == 3 ? 'Level 3' : '' || Cat == 4 ? 'Level 4' : '' || Cat == 5 ? 'Level MAX' : ''}*\n\n
*Proges*\n
╭────────────────
│〽️Level *${level}* To Level *${level + 1}*
│🚀Exp *${exp}* -> *${max}* [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
╰────────────────
╭────────────────
│🦊Fox ${fox == 0 ? 'Do not have' : '' || fox > 0 && fox < 5 ? `Level *${rubah}* To level *${fox + 1}*\n│Exp *${_fox}* -> *${fox * 100}*` : '' || fox == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐱Cat ${kucing == 0 ? 'Do not have' : '' || cat > 0 && cat < 5 ? `Level *${Cat}* To level *${cat + 1}*\n│Exp *${_cat}* -> *${cat * 100}*` : '' || cat == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│🐴Horse ${horse == 0 ? 'Do not have' : '' || hores > 0 && horse < 5 ? `Level *${horse}* To level *${horse + 1}*\n│Exp *${_horse}* -> *${horse * 100}*` : '' || horse == 5 ? '*Max Level*' : ''}
╰────────────────


*achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* from *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* from *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* from *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* from *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* from *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* from *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* from *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* from *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* from *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

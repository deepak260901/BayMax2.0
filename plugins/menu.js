let fs = require ('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p, DevMode }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'ist'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let tags = {
      'main': 'Main',
  'rpg': 'Epic RPG',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'shell': 'Magic Shell',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'nsfw': 'Nsfw',
  'absen': 'Absen',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || ` 
(❤️ω❤️)Konichiwa %name👋🏻 I'm ${conn.user.name}
Aᴜᴛʜᴏʀ:- 𝕋𝕠𝕤𝕙𝕚𝕣𝕠 (灬º‿º灬)
Bᴏᴛ Sɪᴅᴇ:- 𝙈𝙖𝙙𝙚 𝙒𝙞𝙩𝙝 𝙇𝙖𝙣𝙜𝙪𝙜𝙚 𝙅𝙖𝙫𝙖𝙨𝙘𝙧𝙞𝙥𝙩 𝘼𝙣𝙙 𝙑𝙞𝙖 𝙉𝙤𝙙𝙚 𝙅𝙨!
┌───┈[ ᖇᑌᒪᗴՏ ]┈───
│𝗗𝗼𝗻'𝘁 𝗰𝗮𝗹𝗹 𝗕𝗼𝘁 𝗔𝘃𝗼𝗶𝗱 𝗕𝗹𝗼𝗰𝗸𝗶𝗻𝗴!
│𝗗𝗼𝗻'𝘁 𝗦𝗽𝗮𝗺 𝗜𝗻 𝗕𝗼𝘁 𝗗𝗺 𝗢𝗿 𝗢𝘄𝗻𝗲𝗿!
│𝗜𝗳 𝗕𝗼𝘁 𝗜𝘀 𝗡𝗼𝘁 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗶𝗻 𝗧𝗵𝗲𝗻 𝗜𝘁 𝗠𝗲𝗮𝗻𝘀 𝗢𝘄𝗻𝗲𝗿 𝗜𝗻𝘁𝗲𝗿𝗻𝗲𝘁 𝗜𝘀𝘀𝘂𝗲 𝗢𝗿 𝗕𝗼𝘁 𝗜𝘀 𝗢𝗳𝗳𝗹𝗶𝗻𝗲.
└───┈[ 𝗭𝗲𝗿𝗼-𝗧𝘄𝗼 ]┈───
┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━ 
┃Bᴏᴛ Nᴀᴍᴇ : ${conn.user.name}
┃Gʀᴏᴜᴘs Cʜᴀᴛs : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
┃Pᴇʀsɴᴏᴀʟ Cʜᴀᴛs : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
┃Uᴘᴛɪᴍᴇ Bᴏᴛ : ${clockString(process.uptime() * 1000)}
┃Hᴏsᴛ Nᴜᴍʙᴇʀ : @${global.conn.user.jid.split('@')[0]}
┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━ %readmore`.trimStart()
let header = conn.menu.header || '┏ ━━「 %category 」━━'
    let body   = conn.menu.body   || '┃ 〽️ %cmd%islimit'
    let footer = conn.menu.footer || '┗ ┅ ━━━━━━━━━━━ ┅ ━\n'
    let after  = conn.menu.after  || `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendButton(m.chat,text.trim(), author,  pp,  [
], { quoted: m}).catch(_ => conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m)).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'Sorry Menu Error!!r', m)
    throw e
    if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'Menu.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}

handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help)$/i

handler.fail = null
handler.exp = 2

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/kolkata').format('HH')
  res = "Morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 12) {
    res = "Happy Midday"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 19) {
    res = "Good night"
  }
  return res
}

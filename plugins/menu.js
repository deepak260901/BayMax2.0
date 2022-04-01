let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
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
const defaultMenu = {
  before: `
𝔸𝕤𝕥𝕣𝕠.𝕚𝕟𝕔🧣

🗒️ *Notes*
This is a offical 𝔸𝕤𝕥𝕣𝕠.𝕚𝕟𝕔🧣 Bot!
if you have any issues with the bot or any error 
use :report to report to admins.
also use :support to get into our support group 

ENJOY 𝔸𝕤𝕥𝕣𝕠.𝕚𝕟𝕔🧣 !

*👋️ Ohayo* *@${contacts.number}*

i'm *${info.pushname}* 

*My prefix = :*
___________________________

🌟️ *𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧* 🌟️ 

*_🤖ʙᴏᴛ ɪɴғᴏ🤖_*

🏮~ *:report*
💠️ Description: report any issues or error to astro admins 
♦️ Usage: :report profile has error

🏮~ *:bot*
💠️Description: shows bots in the group 🤍
♦️ Usage: :bot
    
🏮~ *:help*
💠️ Description: show's you list command's 📜
♦️ Usage: :help

🏮~ *:help-g*
💠️ Description: show's you game bot list command's 📜
♦️ Usage: :help-g
            
🏮~ *info*
💠️ Description: give's you information about BOT 📃
♦️ Usage: :info

🏮~ *term*
💠️ Description: give's you information about BOT 📃
♦️ Usage: :term

🏮~ *unlisted*
💠️ Description: show's your unlisted command's 📌
♦️ Usage: :unlisted

*_👤ᴜsᴇʀ ɪɴғᴏ📃_*
            
🏮~ *:profile*
💠️ Description: give's the related user's information 📋
♦️ Usage: :profile

🏮~ *:set-bio*
💠️ Description:  sets a given text as your user-notice📃
♦️ Usage: set-bito *text*
   
🏮~ *:set-gif*
💠️ Description: sets a gif/video as your dp/pfp📃
♦️ Usage: set-gif/tag video

🏮~ *:reset-gif*
💠️ Description: delete a gif/video that was on  your dp/pfp📃
♦️ Usage: reset-gif
            
🏮~ *:groupinfo*
💠️ Description: give's the related group's information 📑
♦️ Usage: 
            
🏮~ *:sticker*
💠️ Description:  create's a sticker of the given image 🖼️
♦️ Usage: sticker /tag image

🏮~ *:tsticker*
💠️ Description: create's a sticker of the given image without background 🖼️
♦️ Usage: tsticker /tag image

🏮~ *:wallpaper*
💠️ Description: sends a picture of a query🖼️
♦️ Usage: :wallpaper goku

🏮~ *:desc*
💠️ Description: Bot set's the group description
♦️ Usage: desc *text*

🏮~ *:ping*
💠️ Description: tag's everyone in the group 👥
♦️ Usage: ping *text*

🏮~ *:toimg*
💠️ Description: convert's the sticker into picture
♦️ Usage: toimg /tag sticker

🏮~ *:google*
💠️ Description: provide's information about your given query 🔎
♦️ Usage: google mk
            
🏮~ *:wiki*
💠️ Description:
♦️ Usage: provide's information about your given query 🔍

🏮~ *:detect* or :search
💠️ Description:
♦️ Usage: provide's information about your given image 🔍
            
🏮~ *:image*
💠️ Description: gets you a image you asked for
♦️ Usage: image goku
            
🏮~ *:lyrics*
💠️ Description: give's the lyric"s of the query song🎼
♦️ Usage: lyrics bop dababy

🏮~ *:tts*
💠️ Description: text to speech /vn
♦️ Usage: :tts en astro is good🎼

🏮~ *:iso*
💠️ Description: shows all the languages for tts and translate
♦️ Usage: :iso

🏮~ *:ocr*
💠️ Description: send text/writing in a image
♦️ Usage: :ocr (tag image that has a text)

🏮~ ~*:translate*~
💠️ Description: translate a text
♦️ Usage: :trannslate |mk|en

🏮~ *:wafiu*
💠️ Description: give's you a random anime waifu 🎎
♦️ Usage: waifu

*_💠ᴀᴄᴛɪᴠᴀᴛɪᴏɴ sɪᴅᴇ💠_*
            
🏮~ act 
welcome
rule
charagame
cardgame
pokegame
hentai
farewell

🏮~deact
welcome
rule
charagame
cardgame
pokegame
hentai
farewell

*🗳️𝙼𝙴𝙳𝙸𝙰 𝚂𝙸𝙳𝙴🗳️*
            
🏮~ *:ytsearch*
💠️ Description: search the query song🔍
♦️ Usage: ytsearch naruto

🏮~ *:mp3* 🎶
💠️ Description: provide a twitter link , soundclound link, youtube link to get the audio
♦️ Usage: mp3 yt link
mp3 twitter link
mp3 soundclound link

🏮~ *:mp4* 🎶
💠️ Description: provide a twitter link , youtube link, insta link, tiktok link.
♦️ Usage:  mp4 yt link
mp4 tiktok link
mp4 twitter link
mp4 instagram link
            
🏮~ *:ig* 🎶
💠️ Description: provide a iglink to get the particular image from BOT
♦️ Usage: ig *link* /pic only
            
*_💵ɢᴀᴍʙʟᴇ sɪᴅᴇ💵_*

🏮~ *:wallet*
💠️ Description: show's your money wallet 💳
♦️ Usage: wallet

            
🏮~ *:bank*
💠️ Description: show's your 🏦 account
♦️ Usage: bank

🏮~ *unlisted*
💠️ Description: shows how many wrong cmds you have used
♦️ Usage: show's your unlisted command's 📌

🏮~ *:rob*
💠️ Description: rob's the targeted @user ⛓️
♦️ Usage: rob @mk

🏮~ *:withdraw*
💠️ Description: withdraw's the 💸 you asked 
♦️ Usage: withdraw 500
           
🏮~ *:gamble*
💠️ Description: :gamble 50 right / left ⚖️
♦️ Usage: gamble 50 right

🏮~ *:deposit*
💠️ Description: deposit's your given 💵 in the bank
♦️ Usage: deposit 54

🏮~ *:leaderboard*
💠️ Description: shows you list of great gamblers
♦️ Usage: lead / leaderboard

*🧣ᴀᴅᴍɪɴ ᴏɴʟʏ🧣*

🏮~ *:remove* @user
💠️ Description: BOT kick's the targeted user 👤
♦️ Usage: remove @user
            
🏮~ *:promote* @user 
💠️ Description: BOT promote's the targeted user 👤
♦️ Usage: promote user
            
🏮~ *:demote* @user
💠️ Description:  BOT demote's the targeted user 👤
♦️ Usage: demote @user

🏮~ *:add* @user
💠️ Description: BOT add's the targeted user 👤
♦️ Usage: add +27656035811

🏮~ *:grouplink* @user
💠️ Description: BOT sends grouplink 👤
♦️ Usage:  grouplink 

🏮~ *:revoke* @user
💠️ Description: BOT revokes link 👤
♦️ Usage: revoke 

🏮~ *:close* @user
💠️ Description: BOT closes group👤
♦️ Usage: close 

🏮~ *:open* @user
💠️ Description:
♦️ Usage: BOT open group👤

*_💌hentai ᴏɴʟʏ (18+)_💌*

🍒Hentai
🍒cum
🍒feetg
🍒bj
🍒ero
🍒eroyuri
🍒nekopoi
🍒cumimage
🍒Oppai
🍒*boobs
🍒Blowjob
🍒yuri
🍒anal
🍒hololewd
🍒ncode (code)
🍒nhentai-s (search for nhentai codes)
    
*_🎉ғᴜɴ ᴏɴʟʏ_🎉*

🏮~ *:loli*
💠️ Description: provide's a loli image 🤍
♦️ Usage: loli

🏮~ *:fact*
💠️ Description: fact (query)
♦️ Usage: fact astro is the best

🏮~ *:tweet*
💠️ Description: :tweet | mk | astro is the best  🤍
♦️ Usage: tweet mk | astro shall leave

🏮~ *:haigusha*
💠️ Description: sends a image of a waifu 🤍
♦️ Usage: haigusha

🏮~ *:marry*
💠️ Description: marry your fav waifu🤍
♦️ Usage: marry /tag the haigusha that was sent

🏮~ *:flip*
💠️ Description: flip head or tails🤍
♦️ Usage: flip

🏮~ *pat* @user
💠️ Description: pats's the tagged user
♦️ Usage: pat @user / tag user message
    
🏮~ *punch* @user
💠️ Description: punch's the tagged user
♦️ Usage:  punch  @user / tag user message
                
🏮~ *:slap* @user
💠️ Description:  slap's the tagged user
♦️ Usage: slap  @user / tag user message
                
🏮~ *hug* @user
💠️ Description: hug's the tagged user
♦️ Usage:  hug  @user / tag user message
        
🏮~ *kiss* @user
💠️ Description: kisse's the tagged user
♦️ Usage: kiss  @user / tag user message

🏮~ *kick* @user
💠️ Description: kick the tagged user
♦️ Usage: kick  @user / tag user message

🏮~ *pick* @user
💠️ Description: pick the random user
♦️ Usage: pick *text*

🏮~ *hunt* @user
💠️ Description: hunt for gold and diamond
♦️ Usage: hunt


🎐 _Pro side_ 🎐

🏮~ *:promote* @user 
💠️ Description: BOT promote's the targeted user 👤
♦️ Usage: promote user
            
🏮~ *:demote* @user
💠️ Description:  BOT demote's the targeted user 👤
♦️ Usage: demote @user

🏮~ *:add* @user
💠️ Description: BOT add's the targeted user 👤
♦️ Usage: add +27656035811

🏮~ *:tsticker*
💠️ Description: create's a sticker of the given image without background 🖼️
♦️ Usage: tsticker /tag image


*_🎐Great Hours Ahead 🎐_*

____________________________________
%readmore`.trimStart(),
  header: '┏━「 %category 」━',
  body: '  ┃ %cmd %islimit %isPremium',
  footer: '┗ ┅ ━━━━━━━━━ ┅ ━\n\n',
  after: `ゼロツー(❤️️ω❤️)
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendButton(m.chat,text.trim(), author,  pp,  [
], { quoted: m}).catch(_ => conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m)).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}

let { spawn } = require('child_process')
let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Not enough *${max - user.exp}* lagi!
`.trim()
  }
  let before = user.level * 1
  while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
  if (before !== user.level) {
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let name = this.getName(m.sender)
    let lvlnow = user.level
    let teks = `Congratulations ${name} up level`
    let str = `
${teks} 

• Previous Level : ${before}
• New Levels : ${lvlnow}
*_The more you interact with bots, the higher your level_*
`.trim()
    if (global.support.convert || global.support.magick || global.support.gm) {
      let fontLevel = 'src/level_c.otf'
      let fontTexts = 'src/texts.otf'
      let anotations = '+1385+260' // gapake else if kadang error
      if (lvlnow > 2) anotations = '+1370+260'
      if (lvlnow > 10) anotations = '+1330+260'
      if (lvlnow > 50) anotations = '+1310+260'
      if (lvlnow > 100) anotations = '+1260+260'
      let bufs = []
      const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
        'convert',
        xtsx,
        '-font',
        fontTexts,
        '-fill',
        '#0F3E6A',
        '-size',
        '1024x784',
        '-pointsize',
        '68',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+153+200',
        teks,
        //original together
        '-font',
        fontLevel,
        '-fill',
        '#0A2A48',
        '-size',
        '1024x784',
        '-pointsize',
        '140',
        '-interline-spacing',
        '-1.2',
        '-annotate',
        anotations,
        lvlnow,
        '-append',
        'jpg:-'
      ]
      spawn(_spawnprocess, _spawnargs)
        .on('error', e => {
          throw e
        })
        .on('close', () => {
          this.sendFile(m.chat, Buffer.concat(bufs), 'result.jpg', str, m)
        })
        .stdout.on('data', chunk => bufs.push(chunk))

    } else {
      m.reply(str, m.chat, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      })
    }
  }
}

handler.help = ['levelup']
handler.tags = ['rpg']

handler.command = /^levelup$/i

module.exports = handler

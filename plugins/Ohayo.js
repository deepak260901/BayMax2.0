let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn ='src/sound/Ohayo.mp3'
conn.sendFile(m.chat, vn, 'Ohayo.mp3', null, m, true, {
type: 'audioMessage', // force no convert in ffmpeg
ptt: true // true above doesn't work, because it's forced without converting ;v
})
}
handler.customPrefix = /Ohayo|Good morning/i
handler.command = new RegExp
module.exports = handler

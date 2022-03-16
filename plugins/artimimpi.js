let fetch = require('node-fetch')
 let handler = async(m, { text }) => {
   if (!text) return m.reply('What dream?')
   let res = await fetch(global.API('bg', '/dream', { dream: text }))
   let json = await res.json()
   if (json.status !== true) throw json
   conn.reply(m.chat, json.result.trim(), m)
 }
 handler.help = ['dream meaning'].map(v => v + ' [dream]')
 handler.tags = ['shells']
 handler.command = /^(dream meaning)$/i

 module.exports = handler
let fetch = require('node-fetch')
 let handler = async(m, { text }) => {
   if (!text) return m.reply('Who's name?')
   let res = await fetch(global.API('bg', '/meaningname', { name: text }))
   let json = await res.json()
   if (json.status !== true) throw json
   conn.reply(m.chat, json.result.trim(), m)
 }
 handler.help = ['meaning name'].map(v => v + ' [name]')
 handler.tags = ['shells']
 handler.command = /^(meaningname)$/i

 module.exports = handler
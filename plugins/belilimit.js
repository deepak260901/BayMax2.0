const xpperlimit = 1000
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^blimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-XP ${xpperlimit * count} 💹\n+ ${count} Limit 🎫`, m)
  } else conn.reply(m.chat, `[❗]Your XP is not enough to buy ${count} limit\n▸ *Play Game to earn some money!*`, m)
}
handler.help = ['buylimit <the number of limits you want to buy>']
handler.tags = ['xp']

handler.command = /^(b(uy)?limit)$/i

handler.register = true
handler.exp = 0

module.exports = handler

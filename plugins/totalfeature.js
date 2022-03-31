//🗿

let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `_𝗥𝗲𝗮𝗱𝗶𝗻𝗴...𝗠𝗲𝗻𝘂.𝗷𝘀_`, '© copyright by Toshiro BOT', 'Menu', '.menu', m) 
}

handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
module.exports = handler

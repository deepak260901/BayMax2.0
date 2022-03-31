//🗿

let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `_*total features: 𝙍𝙚𝙖𝙙𝙞𝙣𝙜 𝙈𝙚𝙣𝙪.𝙟𝙨*_`, '©ZeroTwo 2022', 'Menu', '/menu', m) 
}

handler.help = ['help']
handler.tags = ['info']
handler.command = ['help']
module.exports = handler

//🗿

let handler = async (m, { conn }) => {
let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButton(m.chat, `_*total features: ${totalfeatures}*_`, '©ZeroTwo 2022', 'Menu', '/menu', m) 
}

handler.help = ['totalfeature']
handler.tags = ['info']
handler.command = ['totalfeature']
module.exports = handler

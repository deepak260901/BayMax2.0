let handler = (m, { usedPrefix, command }) => {

 m.reply(`
Command *${m.text}*
not found  ${usedPrefix}menu
`.trim())
}
handler.command = new RegExp

module.exports = handler
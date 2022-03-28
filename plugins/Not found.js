let handler = (m, { usedPrefix, command }) => {

 m.reply(`
Did you mean ${usedPrefix}help
`.trim())
}
handler.command = new RegExp

module.exports = handler

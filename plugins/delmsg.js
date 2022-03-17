let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `Use *${usedPrefix}list${which}* to see the list`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' not registered in message list`
    delete msgs[text]
    m.reply(`Successfully deleted the message in the message list with the name '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(-|del)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler

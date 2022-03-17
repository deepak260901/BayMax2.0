let handler = async m => m.reply(`
╭─「 My YouTube and Instagram 」
│ • Instagram: https://instagram.com/itz_toshiro12?utm_medium=copy_link
│ • YouTube: https://youtube.com/channel/UCXpD5-zJKfNjB-RGFNq9FPA
╰────
`.trim()) // subscribe and Follow my Instagram :)
handler.help = ['support']
handler.tags = ['info']
handler.command = /^support(te|si)$/i

module.exports = handler

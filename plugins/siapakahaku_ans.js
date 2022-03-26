let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*who/i.test(m.quoted.text)) return !0
    conn.who am i = conn.who am i ? conn.who am i : {}
    if (!(id in conn. who am I)) return m.reply('The matter has ended')
    if (m.quoted.id == conn.siapakahaku[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.Who am I[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.jawaban.toLowerCase()) {
            global.DATABASE._data.users[m.sender].exp += conn.siapakahaku[id][2]
            m.reply(`*Correct!*\n+${conn.who am I[id][2]} XP`)
            clearTimeout(conn.who am I[id][3])
            delete conn.who am I[en]
        } else if (m.text.toLowerCase().endsWith(json.result.answer.split` `[1])) m.reply(`*A Little More!*`)
        else m.reply(`*False!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler

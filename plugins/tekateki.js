let fetch = require('node-fetch')

let timeout = 120000
let poin = 4999
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.puzzles ? conn.puzzles : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.tekateki[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tekateki.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = ` 
*${json.soal.trim()}?* 
Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}haha for help
Bonus: ${poin} XP
`.trim()
    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `Waktu habis!\nThe answer is *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['puzzles']
handler.tags = ['game']
handler.command = /^puzzles/i

module.exports = handler

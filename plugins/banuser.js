let handler = async(m, { conn, args }) => {
     if (!args || !args[0]) throw 'Who wants to get banned 🐦?'
     let mention = m.mentionedJid[0] ||  conn.parseMention(args[0]) ||  (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') ||  ''
     if (!mention) throw 'Tag one'
     if (!(mention in global.DATABASE._data.users)) throw 'User is not registered in DATABASE!!'
     let user = global.DATABASE._data.users[mention]
     if (user.Banneduser) throw 'User has been banned!!'
     let txt = (args.length > 1 ? args.slice(1).join(' ') : '') ||  ''
     user.Banneduser = true
     user.BannedReason = txt
     m.reply('Successfully Banned USER!')
     m.reply('*You are banned by OWNER or MODERATOR!!*\n *CALL* \n' + global.owner.map((v, i) => '*Owner ' + (i + 1) + ':  * wa.me/' + v).join('\n') + '\n\n' + global.mods.map((v, i) => '*Moderator ' + (i + 1) + '  :* wa.me/' + v).join('\n'), mention)
 }

 handler.help = ['ban']
 handler.tags = ['owner']
 handler.command = /^ban(user)?$/i

 handler.mods = true

 module.exports = handler
let handler = async(m, { conn, args }) => {
     const bonus = Math.floor(Math.random() * 300)
     if (!args[0]) throw 'Please enter your preferred number'
     if (!/\d/i.test(args[0])) throw 'Select the numbers 0 to 9 that you would like to choose!'
     const bot = pickRandom(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
     const isWin = bot == args[0]
     conn.reply(m.chat, `
 *「 GUESS THE NUMBERS *
 Your Number : ${args[0]}
 Bot Number : ${bot}
 Are your numbers the same as bots?
 +${isWin ?  bonuses : 0} XP!
 `.trim(), m)
     if (isWin) global.DATABASE.data.users[m.sender].exp += bonus * 1
 }
 handler.help = ['number <0-9>']
 handler.tags = ['game']
 handler.command = /^number/i

 module.exports = handler

 function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
 }

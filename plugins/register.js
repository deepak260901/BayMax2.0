const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `You are already registered\nWant to re-register?? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Incorrect format\n*${usedPrefix}list <name>.<age>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Name cannot be empty (Alphanumeric)'
  if (!age) throw 'Age cant be empty (Number)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Register successfully!

┌──❁┈[ REGISTRATION ]┈❁───
├❀ Successfully registered In BayMax Database.
├❀ *Name*: ${name}~
├❀ *Age*: ${age}
├❀ *Sn*: ${sn}
└─────❁┈[ ❀𝔹𝕒𝕪𝕄𝕒𝕩❀ ]┈❁─────
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler


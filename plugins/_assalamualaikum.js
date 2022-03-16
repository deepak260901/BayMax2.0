let handler = async(m, { conn }) => {
 let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


 _📚 Read the one below!_
 "People who say greetings like this will get 30 rewards, then, those who are in front of them or hear them reply with the same sentence, namely "Wa'alaikum salam warahmatullahi wabarakatuh" or added with something else (waridhwaana). It means other than the congratulations prayer  also ask Allah SWT
 `

 conn.sendButton(m.chat, caption, author, null, [
         ['Waalaikumsalam', 'Waalaikumsalam'],
     ], { quoted: m })
 }
 handler.customPrefix = /^(assalamualaikum|salam)/i
 handler.command = new RegExp
 module.exports = handler
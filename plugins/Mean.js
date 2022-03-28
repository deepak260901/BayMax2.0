module.exports = {
    before(m) {
       if (/\b(bot)\b/i.test(m.text)) m.reply('Did you mean: ${usedPrefix}help ')
       return !0
  }
}
 
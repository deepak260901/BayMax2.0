let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'Main',
  'rpg': 'Epic RPG',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'shell': 'Magic Shell',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
const defaultMenu = {
  before: `
╔════════════════❀
  🕵️ Hello %name,
╚════════════════❀
╔════════════════❀
🤖 Bot Name: *%me*
🪀 Wa Web Name: *Server Toshiro*
🥏 Wa web Version: *10.0*
🧮 Uptime: *%uptime (%muptime)*
📱 Host Number: @918900351367
╚════════════════❀
%readmore`.trimStart(),
  header: '╔══「 %category 」══❀',
  body: '  ║☆ %cmd %islimit %isPremium',
  footer: '╚════════════❀\n',
  after: '
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭─「 Main 」
〽️ /afk [alasan]
〽️ /jadian (Limit)
〽️ /menu
〽️ /help
〽️ /?
╰────

╭─「 Game 」
〽️ /asahotak
〽️ /caklontong
〽️ /delsesittt (Limit)
〽️ /family100
〽️ /math <mode>
〽️ /siapakahaku
〽️ /suit [gunting|batu|kertas]
〽️ /suitpvp @tag
〽️ /suit2 @tag
〽️ /tebakgambar
〽️ /tebakkata
〽️ /tebakkimia
〽️ /tebaklagu (Limit)
〽️ /tebaklirik
〽️ /tictactoe [custom room name]
〽️ /ttt [custom room name]
╰────

╭─「 Exp & Limit 」
〽️ /buy<jumlah limit>
〽️ /buy <jumlah limit>
〽️ /buyall
〽️ /daily
〽️ /claim
〽️ /leaderboard [jumlah user]
〽️ /lb [jumlah user]
〽️ /levelup
〽️ /limit [@user]
〽️ /pay @user <amount>
〽️ /paylimit @user <amount>
╰────

╭─「 Sticker 」
〽️ /attp <teks>
〽️ /attp2 <teks> (Limit)
〽️ /ctrigger <text> (Limit)
〽️ /dadu
〽️ /getexif
〽️ /semoji [tipe] <emoji>
〽️ /stiker (caption|reply media)
〽️ /stiker <url>
〽️ /stikergif (caption|reply media)
〽️ /stikergif <url>
〽️ /stikerline <url> (Limit)
〽️ /stikertelegram <url> (Limit)
〽️ /stikerly <pencarian> (Limit)
〽️ /stickfilter (caption|reply media) (Limit)
〽️ /stickmaker (caption|reply media) (Limit)
〽️ /togif (reply)
〽️ /toimg (reply)
〽️ /toimg2 (reply)
〽️ /tovideo (reply)
〽️ /ttp <teks>
〽️ /ttp2 <teks> (Limit)
〽️ /ttpdark <teks> (Limit)
〽️ /wm <packname>|<author>
╰────

╭─「 Kerang Ajaib 」
〽️ apakah <teks>?
〽️ /apakah <pertanyaan>
〽️ /artinama <nama>
〽️ kapan <text>?
〽️ kapankah <text>?
〽️ /kapan <pertanyaan>
〽️ /kapankah <pertanyaan>
╰────

╭─「 Quotes 」
〽️ /bucin
〽️ /hacker
〽️ /ilham
╰────

╭─「 Admin 」
〽️ /add nomor,nomor (Limit)
〽️ /+ nomor,nomor (Limit)
〽️ /demote @user
〽️ /member @user
〽️ /↓ @user
〽️ /kick @user (Limit)
〽️ /- @user (Limit)
〽️ /demote @user
〽️ /member @user
〽️ /↓ @user
〽️ /promote @user
〽️ /admin @user
〽️ /^ @user
〽️ /↑ @user
╰────

╭─「 Group 」
〽️ /group *open / close*
〽️ /enable <option>
〽️ /disable <option>
〽️ /getsider
〽️ /infogrup
〽️ /leavegc
〽️ /leavegcall
〽️ /leavegroup
〽️ /linkgroup
〽️ /here
〽️ /listonline
〽️ /opengumuman [teks]
〽️ /oannounce [teks]
〽️ /ohidetag [teks]
〽️ /pengumuman [teks]
〽️ /announce [teks]
〽️ /hidetag [teks]
〽️ /revoke
〽️ /setpp
〽️ /setbye <teks>
〽️ /Setdesk <text>
〽️ /Setname <text>
〽️ /setwelcome <teks>
〽️ /simulate <event> [@mention]
〽️ /totalpesan
〽️ /warn [@user]
〽️ /Cekwarn @user
〽️ /Delwarn @user
╰────

╭─「 Premium 」
〽️ /join <chat.whatsapp.com>  (Premium)
╰────

╭─「 Internet 」
〽️ /alkitab <pencarian>
〽️ /anime <judul>
〽️ /brainly <soal>
〽️ /character <nama>
〽️ /covid <negara>
〽️ /darkjokes
〽️ /fetch <url>
〽️ /get <url>
〽️ /gimage <query>
〽️ /image <query>
〽️ /google <pencarian>
〽️ /googlef <pencarian>
〽️ /epep <id>
〽️ /katabijak <opsi>
〽️ /kbbi <teks>
〽️ /Layarkaca <query>
〽️ /lirik <Apa>
〽️ /manga <judul>
〽️ /resep <makanan>
〽️ /masak <makanan>
〽️ /megumin
〽️ /meme
〽️ /neko
〽️ pikachu
〽️ /pinterest <keyword>
〽️ /ppcouple
〽️ /ppcp
〽️ /loli
〽️ /spotify <query>
〽️ /ss <url>
〽️ /ssf <url>
〽️ /subreddit <query>
〽️ /trendtwit
〽️ /trendingtwitter
〽️ /unsplash <keyword>
〽️ /waifu
〽️ /wallpaperanime (Limit)
〽️ /wikipedia <apa>
〽️ /Zodiakharian <zodiak>
〽️ /Zodiakmingguan <zodiak>
╰────

╭─「 Anonymous Chat 」
〽️ /start,leave,next
╰────

╭─「 MagerNulis & Logo 」
〽️ /tahta <teks> (Limit)
〽️ /magernulis1 <teks> (Limit)
〽️ /magernulis2 <teks> (Limit)
〽️ /magernulis3 <teks> (Limit)
〽️ /magernulis4 <teks> (Limit)
〽️ /magernulis5 <teks> (Limit)
〽️ /magernulis6 <teks> (Limit)
〽️ /nulis <teks>
〽️ /quotemaker <teks>|<wm> (Limit)
〽️ /quotemaker2 <teks | wm> (Limit)
〽️ /tahta2<teks>
╰────

╭─「 Downloader 」
〽️ /fb <url>
〽️ /ig <url>
〽️ /ighighlight <username>
〽️ /igstalk <username>
〽️ /igstory <username>
〽️ /joox <judul> (Limit) (Premium)
〽️ /play <pencarian> (Limit)
〽️ /play2 <pencarian> (Limit)

〽️ /tiktok <url>
〽️ /twitter <url> (Limit)
〽️ /ytmp3 <url> [server: id4, en60, en61, en68] (Limit)
〽️ /yta <url> [server: id4, en60, en61, en68] (Limit)
〽️ /ytmp4 <url> [server: id4, en60, en61, en68] (Limit)
〽️ /ytv <url> [server: id4, en60, en61, en68] (Limit)
〽️ /yt <url> [server: id4, en60, en61, en68] (Limit)
╰────

╭─「 Tools 」
〽️ /aksara <opsi> <teks> (Limit)
〽️ /asupan
〽️ /base64
〽️ /calc <expression>
〽️ /carigrup <pencarian>
〽️ /caripesan <pesan>|<jumlah>
〽️ /hd (caption|reply media)
〽️ /enhance (caption|reply media)
〽️ /enphoto <effect> <text>|[text2]|[text3]
〽️ /gimage <query>
〽️ /image <query>
〽️ /githubsearch <pencarian>
〽️ /hadis
〽️ /halah <teks>
〽️ /hilih <teks>
〽️ /huluh <teks>
〽️ /heleh <teks>
〽️ /holoh <teks>
〽️ /tobraille
〽️ /inspect <chat.whatsapp.com>
〽️ /kodepos <kota> (Limit)
〽️ /memeg<apa|apa>
〽️ /mention <teks>
〽️ /nulis2 <teks>
〽️ /profile [@user]
〽️ /qr <teks>
〽️ /qrcode <teks>
〽️ /readmore <teks>|<teks>
〽️ /spoiler <teks>|<teks>
〽️ /readviewonce
〽️ /run (Limit)
〽️ /scan [nomor]
〽️ /spamcall <nomor> (Limit)
〽️ /ping
〽️ /speed
〽️ /style <text>
〽️ /textpro <effect> <text>|[text2]
〽️ /translate <lang> <teks>
〽️ /tts <lang> <teks>
〽️ /upload (caption|reply media)
〽️ /wait (caption|reply image)
〽️ /wallpaperq (Limit)
〽️ /yts <pencarian>
〽️ /ytsearch <pencarian>
〽️ /zodiac *2002 02 25*
╰────

╭─「 Fun 」
〽️ /dadu
〽️ /dare (Limit)
〽️ /Namaninja <teks>
〽️ /Purba <teks>
〽️ /hug
〽️ /pat
〽️ /wink
〽️ /jodoh <nama>|<nama doi> (Limit)
〽️ /ref
〽️ /simi <teks>
〽️ /simsimi <teks>
〽️ /simih <teks>
〽️ /truth (Limit)
╰────

╭─「 Database 」
〽️ /addvn <teks>
〽️ /addmsg <teks>
〽️ /addvideo <teks>
〽️ /addgif <teks>
〽️ /addaudio <teks>
〽️ /addimg <teks>
〽️ /addsticker <teks>
〽️ /delcmd <text>
〽️ /delvn <teks>
〽️ /delmsg <teks>
〽️ /delvideo <teks>
〽️ /delgif <teks>
〽️ /delaudio <teks>
〽️ /delimg <teks>
〽️ /delsticker <teks>
〽️ /getvn <teks>
〽️ /getmsg <teks>
〽️ /getvideo <teks>
〽️ /getgif <teks>
〽️ /getaudio <teks>
〽️ /getimg <teks>
〽️ /getsticker <teks>
〽️ /infocmd <text>
〽️ /listcmd <text>
〽️ /listall
〽️ /listdoc
〽️ /listvn
〽️ /listmsg
〽️ /listvideo
〽️ /listgif
〽️ /listaudio
〽️ /listimg
〽️ /liststicker
〽️ /unlockcmd
〽️ /lockcmd
〽️ /unlockmsg
〽️ /lockmsg
〽️ /setcmd <text>
╰────

╭─「 Voting 」
〽️ /cekvote
〽️ /hapusvote
〽️ /mulaivote [alasan]
〽️ /upvote
〽️ /devote
╰────

╭─「 Absen 」
〽️ /cekabsen
〽️ /hapusabsen
〽️ /mulaiabsen [teks]
〽️ /absen
╰────

╭─「 Al Qur'an 」
〽️ /alquran <114> <1>
〽️ /asmaulhusna [1-99]
〽️ /hadis
〽️ /salat <daerah>
╰────

╭─「 Jadi Bot 」
〽️ /getcode
〽️ /jadibot (Limit)
〽️ /listjadibot
〽️ /berhenti
〽️ /stop
╰────

╭─「 Owner 」
〽️ /whitelist nomor,nomor
〽️ /addprem [@user]
〽️ /banchat
〽️ /ban
〽️ /blocklist
〽️ /broadcast <teks>
〽️ /bc <teks>
〽️ /broadcastgroup <teks>
〽️ /bcgc <teks>
〽️ /clearchat
〽️ /clearchat chat
〽️ /clearchat group
〽️ /clearchat all
〽️ /deletechat
〽️ /deletechat chat
〽️ /deletechat group
〽️ /deletechat all
〽️ /mutechat
〽️ /mutechat chat
〽️ /mutechat group
〽️ /mutechat all
〽️ /delprem [@user]
〽️ /enable <option>
〽️ /disable <option>
〽️ /premlist
〽️ /oadd @user
〽️ /o+ @user
〽️ /okick @user
〽️ /o- @user
〽️ /opromote @user
〽️ /oadmin @user
〽️ /o^ @user
〽️ /setbotbio
〽️ /setbotname
〽️ /setbye <teks>
〽️ /setexif <packname>|<owner>
〽️ /setmenu <teks>
〽️ /setmenubefore <teks>
〽️ /setmenuheader <teks>
〽️ /setmenubody <teks>
〽️ /setmenufooter <teks>
〽️ /setmenuafter <teks>
〽️ /setwelcome <teks>
〽️ /simulate <event> [@mention]
〽️ /unbanchat
〽️ /ban
〽️ /upsw [text] (Reply Media)
〽️ /upsw <text>
╰────

╭─「 Host 」
〽️ /broadcastjadibot <teks>
〽️ /bcbot <teks>
〽️ /debounce
〽️ /update
〽️ /update2
╰────

╭─「 Advanced 」
〽️ >
〽️ =>
╰────

╭─「 Info 」
〽️ /bannedlist
〽️ /owner/creator
〽️ /del
〽️ /delete
〽️ /donasi
〽️ /groups
〽️ /grouplist
〽️ /bug <laporan>
〽️ /report <laporan>
〽️ /ping
〽️ /speed
╰────

╭─「 No Category 」
〽️ /save @mention <ContactName>
╰────

╭─「 videomaker 」
〽️ /army <text>
〽️ /bold <text>
〽️ /colorful <text>
〽️ /glowing <text>
〽️ /poly <text>
〽️ /retro <text>
〽️ /shaunthesheep
╰────

╭─「 exp 」
〽️ /ceksn
〽️ /daftar <nama>.<umur>
〽️ /reg <nama>.<umur>
〽️ /register <nama>.<umur>
〽️ /unreg <SN|SERIAL NUMBER>
〽️ /unregister <SN|SERIAL NUMBER>
╰────

╭─「 maker 」
〽️ /gay
〽️ /hornycard
〽️ /hornylicense
〽️ /itssostupid
〽️ /iss
〽️ /stupid
〽️ /lolice
〽️ /renungan (Limit)
〽️ /simpcard
〽️ /trigger
〽️ /ytcomment <comment>
╰────

╭─「 download 」
〽️ /gitclone <url> (Limit)
〽️ /githubdl (Limit)
╰────

╭─「 berita 」
〽️ /detik
〽️ /kompas
〽️ /liputan6
〽️ /tribun
〽️ /jalantikus
╰────

╭─「 audio 」
〽️ /tomp3 (reply)
〽️ /tovn (reply)
〽️ /bass [vn]
〽️ /blown [vn]
〽️ /deep [vn]
〽️ /earrape [vn]
〽️ /fast [vn]
〽️ /fat [vn]
〽️ /nightcore [vn]
〽️ /reverse [vn]
〽️ /robot [vn]
〽️ /slow [vn]
〽️ /smooth [vn]
〽️ /tupai [vn]
╰────'
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendButton(m.chat,text.trim(), author,  pp,  [
  
], { quoted: m}).catch(_ => conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m)).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'Sorry, the menu is in error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "wow. Morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 12) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 19) {
    res = "Good night"
  }
  return res
}

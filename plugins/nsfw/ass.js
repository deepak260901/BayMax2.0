// ===============================================================================
// 🔞Zerotwo™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const akaneko = require(`akaneko`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `ass`,
  commandType: "Nsfw🔞",
  description: `ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ darling 💕~`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    if (ᴜʟᴛʀᴏɴ.isGroup && !Zerotwo.isBotGroupAdmin) {
      // Group But Non-Admin
      return await Zerotwo
        .sendMessage(
          Zerotwo.logGroup,
          {
            url: `https://i.postimg.cc/yxsh4dMV/error.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
!😒

'ᴛ ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => chey.catch(error, zerotwo, ᴜʟᴛʀᴏɴ));
    } else if (Zerotwo.fromMe && !Zerotwo.isGroup) {
      // From me and Private
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: await akaneko.nsfw.ass(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*💕zerotwo™*`,
          }
        )
        .catch((error) => chey.catch(error, zerotwo, ᴜʟᴛʀᴏɴ));
    } else if (!Zerotwo.fromMe && !Zerotwo.isGroup) {
      // From me and Private
      return await Zerotwo
        .sendMessage(
          Zerotwo.logGroup,
          {
            url: `https://i.postimg.cc/yxsh4dMV/error.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ! 😒

ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ ᴏꜰ ᴛʜɪꜱ ᴜꜱᴇʀ ..
ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ! 😒


          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    } else if (Zerotwo.isGroup && Zerotwo.isBotGroupAdmin) {
      // Group and Admin
      return await Zerotwo
        .sendMessage(
          Zerotwo.chatId,
          {
            url: await akaneko.nsfw.ass(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*💕zerotwo™*`,
          }
        )
        .catch((error) => chey.catch(error, Zero-Two, zerotwo));
    }
  },
};
// ===============================================================================
// 🔞Zerotwo™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================

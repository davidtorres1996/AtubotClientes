import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';


export const LinkPreviewFlow = bot.addKeyword("linkin")
.addAction(async (ctx, {flowDynamic, provider, endFlow}) => {  
  const id = ctx.key.remoteJid;
  const abc = await provider.getInstance();
  await abc.sendMessage(id, { text: 'Hi, this was sent using https://www.atubot.net.pe/p/bienvenido.html' });
});

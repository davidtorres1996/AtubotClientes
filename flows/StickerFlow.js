import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';

export const StickerFlow = bot.addKeyword('stickersito')
  .addAction(async (ctx, { provider }) => {
    const sock = await provider.getInstance();
    const msgPoll = {
      sticker: {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqOlu0erY-6X5_svW8cyRoND2jplKZ4f7TESPHYK1_lJ-vxze-EgVa8LYQ8O_fuWBh0qL53-qZ4M5itP2h_gkzAObRO30CfRcEKA2mSnFyWLvGlw4IRboImtJx45wMKcfFrRHWCTlTT9bIHijhQzfk4dm4AcKmXz_bqWtF3omhhLJfieclo_sx-d8X-9yr/s500/icono%20nota%20de%20voz.png"
      }
    };
    sock.sendMessage(ctx.key.remoteJid, msgPoll)
  })
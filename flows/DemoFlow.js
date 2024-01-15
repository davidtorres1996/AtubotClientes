import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';

const clave2 = `/(?:^|\s)demo v2(?=\s|$)/gi`

export const DemoFlow = bot .addKeyword(clave2, {regex: true})
  .addAction(async (ctx, { flowDynamic, provider }) => {

    const id = ctx.key.remoteJid
    const abc = await provider.getInstance();

    await sendReaction(provider, ctx, "🤖");
    await typing(provider, ctx, 2000);
    await flowDynamic(`*¡${ctx.pushName}!* 🌟\nPuedes aprender a descargar e instalar la demo en el siguiente enlace:\n\nhttps://atubot.net.pe/tienda/demo-plugin-atubot-v3/`);
    await typing(provider, ctx, 2000);
    await flowDynamic(`Encontraras el Paso a Paso para instalar y probar la DEMO`);
    await endFlow();
  
    });
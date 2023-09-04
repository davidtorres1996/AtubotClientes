import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';

const clave2 = `/(?:^|\s)demo v2(?=\s|$)/gi`

export const DemoFlow = bot .addKeyword(clave2, {regex: true})
  .addAction(async (ctx, { flowDynamic, provider }) => {

    const id = ctx.key.remoteJid
    const abc = await provider.getInstance();

    await sendReaction(provider, ctx, "🤖");
    await typing(provider, ctx, 2000);
    flowDynamic(`*¡${ctx.pushName}!* 🌟\n¡Aquí está tu enlace demo del Plugin:\nhttps://taskernet.com/shares/?user=AS35m8kO2Sf3H%2FI3H3GKoKtye5Q%2B6fB3%2BLIGVsjFCPmpGvIq9P56Qntx2mIgD1PbSOfhqpIBgixxvA%3D%3D&id=Project%3APlugin+Demo+V2.6 🤖💼`)
    await typing(provider, ctx, 2000);
    await flowDynamic("Pero antes de que empieces a explorar, asegúrate de revisar nuestras instrucciones detalladas paso a paso 📜, donde encontrarás todo lo que necesitas para descargar e instalar la herramienta:")
    await typing(provider, ctx, 2000);
    await abc.sendMessage(id, { text: 'https://www.atubot.net.pe/p/bienvenido.html  \nPor favor, tómate un momento para *revisar todas las instrucciones* de instalación antes de hacer cualquier pregunta.' });
  
    });
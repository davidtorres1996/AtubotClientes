import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { agregarTelefono } from '../utils/telefonos.js';
import { InfoPluginFlow } from "./InfoPluginFlow.js";
import { ServiciosFlow } from "./ServiciosFlow.js";

const regexMenu = `/^men[uú]$/i`;

export const MenuFlow = bot.addKeyword(regexMenu, { regex: true })
  .addAction(async (ctx, { flowDynamic, provider }) => {

    const Menu = /^men[uú]$/i;
    const id2 = ctx.from

    if (Menu.test(ctx.body)) {
      //agregarTelefono(id2);
      await sendReaction(provider, ctx, "🤖");
      await typing(provider, ctx);
      await flowDynamic([
        {
          body: `*${ctx.pushName}* 😊👋\nTengo estas opciones para ti:\n\n├1️⃣ _*Info Plugin V3*_\n├2️⃣ _*Comprar Plugin V3*_\n├3️⃣ _*Demo Plugin V3*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
          media: "https://atubot.net.pe/wp-content/uploads/2024/01/welcome-chatbot.jpg"
        },
        "_◼️Escribe menu cuando quieras volver a ver estas opciones_"
      ]
      )
    } else {

    }

  })
  .addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, gotoFlow, provider, endFlow }) => {

    const id = ctx.key.remoteJid;
    const abc = await provider.getInstance();

    switch (ctx.body) {
      case '1':
        await sendReaction(provider, ctx, "🤖");
        await gotoFlow(InfoPluginFlow)
        await endFlow();

        break;

      case '2':
        await sendReaction(provider, ctx, "🤖");
        await typing(provider, ctx, 1000);
        await flowDynamic([
          `¡Genial *${ctx.pushName}*! Si ya probaste la demo y estás contento con las capacidades del Plugin, puedes proceder a realizar el pago.`
        ]
        )
        await typing(provider, ctx, 2000);
        await flowDynamic([
          `*Paso 1:* Registrate e Inicia sesion en el siguiente enlace:\n\nhttps://atubot.net.pe/registrarme/`
        ]
        )

        await typing(provider, ctx, 2000);
        await provider.vendor.sendMessage(id, {
          text: '*Paso 2:* En el siguiente enlace Añade al 🛒 carrito de Compra y procede a 💰 Pagar con cualquiera de los metodos de Pago disponibles',
          contextInfo: {
            externalAdReply: {
              title: 'Plugin Autoresponder WhatsApp V3.0',
              body: 'Click Aqui para Comprar 👆',
              mediaType: 'IMAGE', //VIDEO - IMAGE - NONE
              showAdAttribution: false, //Mensaje a partir de un anuncio
              renderLargerThumbnail: true,
              mediaUrl: 'https://atubot.net.pe/tienda/plugin-autoresponder-whatsapp-v3-0/',
              thumbnailUrl: 'https://atubot.net.pe/wp-content/uploads/2023/11/plug-v3.0.jpg', //url imagen
              sourceUrl: 'https://atubot.net.pe/tienda/plugin-autoresponder-whatsapp-v3-0/',
            },
          },
        });
        await fallBack()


        break;

      case '3':
        await sendReaction(provider, ctx, "🤖");
        await typing(provider, ctx, 1000);
        await flowDynamic(`*¡${ctx.pushName}!* 🌟\nPuedes aprender a descargar e instalar la demo en el siguiente enlace:\n\nhttps://atubot.net.pe/tienda/demo-plugin-atubot-v3/`)
        await typing(provider, ctx, 2000);
        await flowDynamic(`Encontraras el Paso a Paso para instalar y probar la DEMO`)
        await fallBack()

        break;

      case '4':
        await sendReaction(provider, ctx, "🤖");
        await gotoFlow(ServiciosFlow);
        await endFlow();

        break;

      case '5':
        await sendReaction(provider, ctx, "🤖");
        await typing(provider, ctx);
        await flowDynamic([
          {
            body: `*${ctx.pushName}* 😊👋\nEste apartado está actualmente en proceso de construcción. Estamos trabajando arduamente para brindarte la mejor experiencia posible. Gracias por tu paciencia y por visitarnos. Te sugerimos intentarlo de nuevo en otro momento. ¡Estamos en plena acción! 🏗️👷‍♂️🛠️`,
            media: "https://atubot.net.pe/wp-content/uploads/2024/01/tutoriales.jpg"
          }
        ])
        await fallBack()

        break;

      case '6':
        await sendReaction(provider, ctx, "🤖");
        await typing(provider, ctx);
        await flowDynamic([
          {
            body: `*${ctx.pushName}* 😊👋\nEste apartado está actualmente en proceso de construcción. Estamos trabajando arduamente para brindarte la mejor experiencia posible. Gracias por tu paciencia y por visitarnos. Te sugerimos intentarlo de nuevo en otro momento. ¡Estamos en plena acción! 🏗️👷‍♂️🛠️`,
            media: "https://atubot.net.pe/wp-content/uploads/2024/01/tienda.jpg"
          }
        ])
        await fallBack();

        break;

      default:
        await fallBack();

        break;
    }


  })
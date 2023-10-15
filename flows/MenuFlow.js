import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { agregarTelefono } from '../utils/telefonos.js';
import { InfoPluginFlow } from "./InfoPluginFlow.js";
import { ServiciosFlow } from "./ServiciosFlow.js";

const regexMenu = `/^men[uú]$/i`;

export const MenuFlow = bot .addKeyword(regexMenu, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    const Menu = /^men[uú]$/i;

    if (Menu.test(ctx.body)) {
      agregarTelefono(id2);
      await sendReaction(provider, ctx, "🤖");
      await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `*${ctx.pushName}* 😊👋\nTengo estas opciones para ti:\n\n├1️⃣ _*Info Plugin V2*_\n├2️⃣ _*Comprar Plugin V2*_\n├3️⃣ _*Demo Plugin V2*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
            media: "https://drive.google.com/uc?id=1pAFpsqEq-HXLYux7B23RMUIdaUx7QDOC"
            },
            "_◼️Escribe el numero para indicarme tu elección_\n_◼️Escribe menu cuando quieras volver a ver estas opciones_"
        ]
        )
      } else {
        
      }

})
.addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, gotoFlow, provider }) => {

  const id = ctx.key.remoteJid;
  const abc = await provider.getInstance();

    switch (ctx.body) {
        case '1':
          await sendReaction(provider, ctx, "🤖");
          gotoFlow(InfoPluginFlow)
          break;
      
        case '2':
          await sendReaction(provider, ctx, "🤖");
          await typing(provider, ctx, 2000);
            flowDynamic([
              `¡Genial *${ctx.pushName}*! Si ya probaste la demo y estás contento con las capacidades del Plugin, puedes proceder a realizar el pago.`
            ]
            )
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://atubot.net.pe/producto/plugin-v2-pro/\n*Precio y metodos de Pago en el enlace 👆*' });
            fallBack()          

          break;
      
        case '3':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            flowDynamic(`*¡${ctx.pushName}!* 🌟\n¡Aquí está tu enlace demo del Plugin:\nhttps://taskernet.com/shares/?user=AS35m8kO2Sf3H%2FI3H3GKoKtye5Q%2B6fB3%2BLIGVsjFCPmpGvIq9P56Qntx2mIgD1PbSOfhqpIBgixxvA%3D%3D&id=Project%3APlugin+Demo+V2.6 🤖💼`)
            await typing(provider, ctx, 2000);
            await flowDynamic("Pero antes de que empieces a explorar, asegúrate de revisar nuestras instrucciones detalladas paso a paso 📜, donde encontrarás todo lo que necesitas para descargar e instalar la herramienta:")
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://atubot.blogspot.com/p/demo.html  \nPor favor, tómate un momento para *revisar todas las instrucciones* de instalación antes de hacer cualquier pregunta.' });
            fallBack()
          break;
      
        case '4':
          await sendReaction(provider, ctx, "🤖");
          gotoFlow(ServiciosFlow)
          break;
      
        case '5':
          await sendReaction(provider, ctx, "🤖");
          await typing(provider, ctx, 2000);
          await flowDynamic([
              {
              body: `*${ctx.pushName}* 😊👋\nEste apartado está actualmente en proceso de construcción. Estamos trabajando arduamente para brindarte la mejor experiencia posible. Gracias por tu paciencia y por visitarnos. Te sugerimos intentarlo de nuevo en otro momento. ¡Estamos en plena acción! 🏗️👷‍♂️🛠️`,
              media: "https://drive.google.com/uc?id=1pBFiwBztFid-7wp-WMkHY9E_aMiJr_5F"
              }
          ])
          fallBack()
          break;
      
        case '6':
          await sendReaction(provider, ctx, "🤖");
          await typing(provider, ctx, 2000);
          await flowDynamic([
              {
              body: `*${ctx.pushName}* 😊👋\nEste apartado está actualmente en proceso de construcción. Estamos trabajando arduamente para brindarte la mejor experiencia posible. Gracias por tu paciencia y por visitarnos. Te sugerimos intentarlo de nuevo en otro momento. ¡Estamos en plena acción! 🏗️👷‍♂️🛠️`,
              media: "https://drive.google.com/uc?id=1O9LDj0OoXG-UyEvaGpyCeLqugoeQYXvo"
              }
          ])
          fallBack()
          break;
      
        default:
            fallBack()
          break;
      }
      
    
})
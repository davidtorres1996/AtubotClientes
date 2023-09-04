import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { InfoPluginFlow } from "./InfoPluginFlow.js";
import { ServiciosFlow } from "./ServiciosFlow.js";

const regexMenu = `/^menu$/i`;

export const MenuFlow = bot .addKeyword(regexMenu, {regex: true})
.addAction(async (ctx, {flowDynamic, state, provider}) =>{  

    state.update({ welcome: "enviado" })
    const Menu = /^menu$/i;

    if (Menu.test(ctx.body)) {
      await sendReaction(provider, ctx, "🤖");
      await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `*${ctx.pushName}* 😊👋\nTengo estas opciones para ti:\n\n├1️⃣ _*Info Plugin V2*_\n├2️⃣ _*Comprar Plugin V2*_\n├3️⃣ _*Demo Plugin V2*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
            media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht8i6RYajBNeyxIqDJXHAsUYaCgf1GtI_JCuhHvuhJpAHCDGmobVKns_e8brGmnfI_RQwVw7atDgVd1mEkU9--J3Rs2lGFLQz2ZQf2_omf25RTll4pBFI4kicxAETHZ8Vj1uMZe5qvRrTWmZlt0RAPE-4xgS6bwEDap5GbQ5Qeo9pBIyp7KxlOgsldA5hS/s1920/menu-principal.jpg"
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
              `¡Genial *${ctx.pushName}*! Si ya probaste la demo y estás contento con las capacidades del Plugin, puedes proceder a realizar el pago. A continuación, te proporcionamos los métodos de pago disponibles:`,
              "*Para usuarios fuera de Perú:*\n*_55 USD/USDT_*"
            ]
            )
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7URTTUAX9K62G \n*Paga con PAYPAL*' });
            await typing(provider, ctx, 2000);
            await flowDynamic("*Criptomonedas en Binance:* Envía el pago a este correo electrónico:\n*electro.david96@gmail.com*")
            await typing(provider, ctx, 2000);
            await flowDynamic("*Para usuarios en Perú:*\n*_s/200_*\n\n*BCP:* 191 07324773 0 59\n*INTERBANK:* 402 3118005756\n*YAPE:* 924135651\n _Todos a nombre de David Torres, tu servidor_")
            await typing(provider, ctx, 2000);
            await flowDynamic("Una vez que hayas realizado el pago, asegúrate de enviarnos tu *comprobante de pago* y tu dirección de *correo electrónico.* Una vez verificado el pago, te enviaremos el archivo correspondiente.📤🚀")
            fallBack()

          break;
      
        case '3':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            flowDynamic(`*¡${ctx.pushName}!* 🌟\n¡Aquí está tu enlace demo del Plugin:\nhttps://taskernet.com/shares/?user=AS35m8kO2Sf3H%2FI3H3GKoKtye5Q%2B6fB3%2BLIGVsjFCPmpGvIq9P56Qntx2mIgD1PbSOfhqpIBgixxvA%3D%3D&id=Project%3APlugin+Demo+V2.6 🤖💼`)
            await typing(provider, ctx, 2000);
            await flowDynamic("Pero antes de que empieces a explorar, asegúrate de revisar nuestras instrucciones detalladas paso a paso 📜, donde encontrarás todo lo que necesitas para descargar e instalar la herramienta:")
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://www.atubot.net.pe/p/bienvenido.html  \nPor favor, tómate un momento para *revisar todas las instrucciones* de instalación antes de hacer cualquier pregunta.' });
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
              media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhe6VuKbCb0HE_BC-fuMnANCjD1BW9ogBS7ubODnzgwpCFjuAqsxtKhZV3iMCwD60cTToBlPY1Hz4sVNLklVAvWhzLVet8CcuCNNCkwtaev1rMIxrHoawQq6hlDp2h43uBlB-1PF-EDsrmOQe8UXTCcEiHOCkxWrv2ZLn-vRzAju1Csfbr9vnPnznA9KAoL/s3556/tutoriales.jpg"
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
              media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit6SO_VZmGuxZLJ_vTiE6KEX5XT2Ig2SRkbyYr2OB6lQgI_Rao3HNFAAOYl2-qzcqdS3MzEd8sOGHZkFN_h48mGHLVgbSMsUdR3_s7_2pmCcSGd2uzrHegw0HppjvdME8fzYSi5kh8ktw3hUxtEI6_FTzIg6-xsILNh7MBqL-KiW_7ajkNhVeBumyhynsS/s3556/tienda.jpg"
              }
          ])
          fallBack()
          break;
      
        default:
            fallBack()
          break;
      }
      
    
})
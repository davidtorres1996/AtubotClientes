import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow } from "./MenuFlow.js";


export const ServiciosFlow = bot .addKeyword(bot.EVENTS.ACTION)
.addAction(async (ctx, {flowDynamic, provider, state}) =>{  

    state.update({ welcome: "enviado" })
    await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `🛠️ *Servicos Disponibles:*\n\n├1️⃣ _ChatBot Mobile_\n├2️⃣ _ChatBot Server_\n└0️⃣ _Ir atrás ↲_`,
            media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhMB97KBt31Ate86AZVWZJAa51HfmDBS9ZHoW0Q9zEnPRhdgg-Fneto2YxdpbZmqdZaq2Xjs2-RT3KFhC6LMoerW1y0pSlym-eSOOaE3fIsYx3ANcWk-dpvPlhqfMj-XkP_w8S_qUDThTU0OfdkE449ujVBmrACekmIMTSJtRGTgwJiXp_XEAbovyQak67E/s3556/servicios.jpg"
            }
        ]
        )


})
.addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, provider, gotoFlow }) => {

    const id = ctx.key.remoteJid;
    const abc = await provider.getInstance();

    switch (ctx.body) {
        case '1':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`🚀 ¡Con nuestro servicio de *chatbot mobile,* puedes llevar tu proyecto al siguiente nivel! 📱🤖\n\nEn Atubot, estamos listos para ayudarte a desarrollar tu proyecto en *Autoresponder y Tasker,* junto con todos los plugins personalizados que necesites. ¡Las posibilidades son infinitas! 🧙‍♂️💡\n🌟 Algunas de las funciones que soportamos incluyen:`)
            await typing(provider, ctx, 2000);
            await flowDynamic(`✅Envio multimedia\n✅Agendar a Contactos\n✅Conexion Google Sheets\n✅Envio de Correos\n✅Consumo de Apis`)
            await typing(provider, ctx, 2000);
            await flowDynamic(`Para recibir una cotización personalizada, simplemente mándanos tus requerimientos detallados. Puedes utilizar esta imagen que te compartimos como ejemplo: `)
            await abc.sendMessage(id, {
              image: { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE3OcC1JwDMpXl9-b6GSiA39Fw00fOaFyCBNaPTOM9Tev_JvP7PSnXyq5khwdWkn3IepWfqP29HaWqyfT09RKYVmEFAyyCQeOvFl5knv2RIOrHeIczSJB7Eh7W5cnx8rZTw2VGoII2RcaiBlPnjYcRFtVfLYzGHjt5z4xNfAdMBevLfS1wAITnRvJPRsu5/s3194/plantilla%20bot%20atubot.png' },         
            }) 
            await typing(provider, ctx, 2000);
            await flowDynamic(`Nos encantaría recibir un documento detallado que describa el *flujo de conversación* y las funciones que necesitas. Puedes enviarnos tu información en formato *Word, Excel, PowerPoint* o cualquier otro formato que prefieras. Una vez que revisemos tu documento, te proporcionaremos una estimación de costos y estaremos listos para discutir todos los detalles. ¡Estamos emocionados por la posibilidad de trabajar contigo en tu proyecto! 🤝💼🚀`)
            fallBack()
          break;
      
        case '2':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`🚀 ¡Con nuestro servicio de *chatbot server*, puedes llevar tu proyecto al siguiente nivel! 🖥️🤖\n\nEn Atubot, estamos listos para ayudarte a desarrollar tu proyecto, *eliminando la dependencia de tu dispositivo móvil.* El chatbot podrá vivir en un *servidor o VPS* que tú rentarás. ¡Las posibilidades son infinitas! 🧙‍♂️💡\n\n🌟 Algunas de las funciones que soportamos incluyen:`)
            await typing(provider, ctx, 2000);
            await flowDynamic(`✅Envio multimedia\n✅Conexion Google Sheets\n✅Consumo de Apis\n✅Administrar Grupos\n✅Reaccionar a mensajes`)
            await typing(provider, ctx, 2000);
            await flowDynamic(`Para recibir una cotización personalizada, simplemente mándanos tus requerimientos detallados. Puedes utilizar esta imagen que te compartimos como ejemplo: `)
            await abc.sendMessage(id, {
              image: { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjE3OcC1JwDMpXl9-b6GSiA39Fw00fOaFyCBNaPTOM9Tev_JvP7PSnXyq5khwdWkn3IepWfqP29HaWqyfT09RKYVmEFAyyCQeOvFl5knv2RIOrHeIczSJB7Eh7W5cnx8rZTw2VGoII2RcaiBlPnjYcRFtVfLYzGHjt5z4xNfAdMBevLfS1wAITnRvJPRsu5/s3194/plantilla%20bot%20atubot.png' },         
            }) 
            await typing(provider, ctx, 2000);
            await flowDynamic(`Nos encantaría recibir un documento detallado que describa el *flujo de conversación* y las funciones que necesitas. Puedes enviarnos tu información en formato *Word, Excel, PowerPoint* o cualquier otro formato que prefieras. Una vez que revisemos tu documento, te proporcionaremos una estimación de costos y estaremos listos para discutir todos los detalles. ¡Estamos emocionados por la posibilidad de trabajar contigo en tu proyecto! 🤝💼🚀`)
            fallBack()
          break;

        case '0':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic([
                {
                body: `*${ctx.pushName}* 😊👋\nTengo estas opciones para ti:\n\n├1️⃣ _*Info Plugin V2*_\n├2️⃣ _*Comprar Plugin V2*_\n├3️⃣ _*Demo Plugin V2*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
                media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht8i6RYajBNeyxIqDJXHAsUYaCgf1GtI_JCuhHvuhJpAHCDGmobVKns_e8brGmnfI_RQwVw7atDgVd1mEkU9--J3Rs2lGFLQz2ZQf2_omf25RTll4pBFI4kicxAETHZ8Vj1uMZe5qvRrTWmZlt0RAPE-4xgS6bwEDap5GbQ5Qeo9pBIyp7KxlOgsldA5hS/s1920/menu-principal.jpg"
                }
            ])
            gotoFlow(MenuFlow)
          break;
      
        default:
            fallBack()
          break;
      }
      
    
})
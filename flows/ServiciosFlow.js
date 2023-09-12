import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow } from "./MenuFlow.js";


export const ServiciosFlow = bot .addKeyword(bot.EVENTS.ACTION)
.addAction(async (ctx, {flowDynamic, provider, state}) =>{  

    state.update({ welcome: "enviado" })
    await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `🛠️ *Servicios Disponibles:*\n\n├1️⃣ _ChatBot Mobile_\n├2️⃣ _ChatBot Server_\n└0️⃣ _Ir atrás ↲_`,
            media: "https://drive.google.com/uc?id=1aWjVhnlZsX5hgSWeZpBkhMyiHf-0ixVo"
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
              image: { url: 'https://drive.google.com/uc?id=1P8HdDU9iP8GF-syVvImxwjyj2AV3VbZN' },         
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
              image: { url: 'https://drive.google.com/uc?id=1P8HdDU9iP8GF-syVvImxwjyj2AV3VbZN' },         
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
                media: "https://drive.google.com/uc?id=1pAFpsqEq-HXLYux7B23RMUIdaUx7QDOC"
                }
            ])
            gotoFlow(MenuFlow)
          break;
      
        default:
            fallBack()
          break;
      }
      
    
})
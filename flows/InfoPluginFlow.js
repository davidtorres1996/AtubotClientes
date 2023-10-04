import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow } from "./MenuFlow.js";


export const InfoPluginFlow = bot .addKeyword(bot.EVENTS.ACTION)
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `❓ *Preguntas Frecuentes:*\n\n├1️⃣ _¿Cuál es el precio?_\n├2️⃣ _¿Es Pago único?_\n├3️⃣ _¿Qué puede hacer el plugin?_\n├4️⃣ _¿En múltiples dispositivos?_\n├5️⃣ _¿Es difícil de instalar?_\n├6️⃣ _¿Qué es este plugin?_\n├7️⃣ _¿Recibiré actualizaciones?_\n├8️⃣ ¿En cualquier teléfono?\n├9️⃣ _¿Es recomendable para mí?_\n└0️⃣ _Ir atrás ↲_`,
            media: "https://drive.google.com/uc?id=1ofQngAxsbJVReAzMB-avi7nI338VHByG"
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
            await flowDynamic(`🎉 ¡Gran noticia! El Plugin V2 está disponible por solo $55 USD en este momento. Pero, ¡date prisa! El precio aumentará a medida que sigamos mejorándolo. 🚀 ¡Aprovecha esta oferta especial ahora! 😃💰`)
            fallBack()
          break;
      
        case '2':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`💼 El pago es único, lo que significa que solo tendrás que realizar un pago. 🎁 Te entregaremos el archivo fuente junto con las instrucciones de instalación y mantenimiento. 💻 ¡Sin pagos recurrentes! Es una oferta que no puedes dejar pasar. 😊👍`)
            fallBack()
          break;
      
        case '3':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`📦 Actualmente, el plugin tiene una amplia gama de funciones, como enviar imágenes, videos, PDF, notas de voz y otros archivos, ¡incluso documentos de Word o Excel! 📄📸🎥 Además, puedes utilizarlo para enviar encuestas por WhatsApp. ¿Quieres ver todas sus funciones en acción? Echa un vistazo a este video: `)
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://www.youtube.com/watch?v=vR4XR6qKYY4&t \n*Plugin V2.6*' });
            fallBack()
          break;
      
        case '4':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`📲 Puedes instalar el plugin en más de un dispositivo, pero ten en cuenta que el soporte técnico y las actualizaciones estarán disponibles solo para un dispositivo. El código fuente te permite instalarlo en N dispositivos, pero el soporte es exclusivo para uno. 🛠️📱
            Recuerda que queda estrictamente prohibida la reproducción total o parcial de este contenido sin autorización previa por escrito. Además, no me hago responsable si compras el producto con la intención de revenderlo. ¡Usa el plugin de manera responsable y disfruta de sus funciones! 😊🚫🔄`)
            fallBack()
          break;
      
        case '5':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(`📚 El plugin tiene instrucciones detalladas en video 🎥, donde se explican paso a paso los procedimientos de instalación. Para seguir las guías, es necesario tener un conocimiento mínimo sobre tu dispositivo móvil 📱 para ubicar y configurar los permisos requeridos. Te invitamos a descubrir por ti mismo cómo instalarlo visitando la siguiente página:`)
            await typing(provider, ctx, 2000);
            await abc.sendMessage(id, { text: 'https://atubot.blogspot.com/p/bienvenido.html \n*Recuerda que puedes Pedir la Demo en el menu principal 🚀🔧*' });
            fallBack()
          break;
      
        case '6':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic(
                {
                body: `📱🔌 El plugin es un emocionante proyecto que *combina Tasker* (una aplicación de automatización) *con Autoresponder* (una aplicación de respuestas automáticas) para permitirte enviar medios a través de WhatsApp de una manera única. Funciona como un *intermediario* al establecer un *servidor local* en tu dispositivo 🌐, lo que te permite vincular tu WhatsApp de la misma forma que lo harías con WhatsApp Web. Esto abre un nuevo mundo de posibilidades para la comunicación entre Tasker y Autoresponder, como se muestra en este *diagrama 👆*`,
                media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIOJwegfARE3YpvKu4qsa-V4_TMwSVD45OIqjHH5DkTld3vwbkCYtetH0hY9I8J8JdschXcnUKfFW7gwky-pnHg9BwrgUOaLGRq3F814-lBdfnX0E6byJW9lhgW171Qz-_fAtpF9A5IOhCGUyiME5L2u-2B-Wqfpaz1hGCTU5Syz4XtGi6asl97Up2tYmp/s1249/Untitled-2023-08-31-1243.png"
                })
            await typing(provider, ctx, 2000);
            await flowDynamic(`Esta solución creativa es perfecta para aquellos a quienes les gusta *cacharrear* y hacer las cosas por sí mismos, ya que les brinda la capacidad de *automatizar* diferentes aspectos de su experiencia en WhatsApp. Abre un nuevo mundo de posibilidades para la comunicación entre Tasker y Autoresponder🔥🤖`)
            fallBack()
          break;

        case '7':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic("¡Por supuesto! Tendrás acceso a todas las emocionantes actualizaciones relacionadas con el Plugin V2. Sin embargo, es importante recordar que debes cumplir con las reglas establecidas, como la prohibición de la reproducción total o parcial de este contenido sin autorización previa por escrito. Además, comprar el producto con la intención de revenderlo automáticamente te excluye de la lista de actualizaciones y descuentos exclusivos para nuestros valiosos clientes. 🛡️🔒")
            await typing(provider, ctx, 2000);
            await flowDynamic(`¡Mantente en el camino correcto y disfruta de todas las ventajas de estar al día con las últimas novedades y mejoras del Plugin V2! 🚀📱😃`)
            fallBack()
          break;

        case '8':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic("El Plugin V2 viene con un pequeño *requisito:* necesitas un dispositivo móvil de *gama media como mínimo* para aprovechar al máximo su potencial. Si estás en un dispositivo más modesto, no te preocupes, aún puedes disfrutar del Plugin V2 utilizando un emulador de Android en tu PC. ¡Así podrás automatizar tu WhatsApp de manera creativa! 📱💡✨")
            await typing(provider, ctx, 2000);
            await flowDynamic(`*Un consejo antes de comprar:* te recomendamos probar primero la versión *demo* en el menú principal. Esto te permitirá asegurarte de que el Plugin V2 es completamente compatible con tu dispositivo, lo que garantiza *una compra consciente* y sin sorpresas. ¡No querrás perderte esta oportunidad de automatización! 😉🚀`)
            fallBack()
          break;

        case '9':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 2000);
            await flowDynamic("El Plugin está diseñado para entusiastas de la tecnología con *conocimientos básicos* en aplicaciones de automatización como Tasker y AutoResponder. También es ideal *para pequeños negocios y emprendedores* que desean automatizar las respuestas de WhatsApp de una manera atractiva, enviando notas de voz, imágenes 📷 o PDFs 📄.")
            await typing(provider, ctx, 2000);
            await flowDynamic(`Si tu negocio tiene un *alto tráfico* de más de 300 mensajes al día o buscas una herramienta extremadamente fácil de usar y mantener, entonces esta herramienta podría no ser la más adecuada para ti. En ese caso, te sugerimos explorar plataformas como ManyChat o Twilio. Si no estás seguro, ¡puedes probar la demo en el menú principal para asegurarte si se adapta a tus necesidades! 📱💼🚀😊"`)
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
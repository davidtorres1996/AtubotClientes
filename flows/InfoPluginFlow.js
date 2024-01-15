import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow } from "./MenuFlow.js";


export const InfoPluginFlow = bot .addKeyword(bot.EVENTS.ACTION)
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    await typing(provider, ctx);
        await flowDynamic([
            {
            body: `❓ *Preguntas Frecuentes:*\n\n├1️⃣ _¿Cuál es el precio?_\n├2️⃣ _¿Es Pago único?_\n├3️⃣ _¿Qué puede hacer el plugin?_\n├4️⃣ _¿En múltiples dispositivos?_\n├5️⃣ _¿Es difícil de instalar?_\n├6️⃣ _¿Qué es este plugin?_\n├7️⃣ _¿Recibiré actualizaciones?_\n├8️⃣ ¿En cualquier teléfono?\n├9️⃣ _¿Es recomendable para mí?_\n└0️⃣ _Ir atrás ↲_`,
            media: "https://atubot.net.pe/wp-content/uploads/2024/01/preguntas-frecuentes.jpg"
            }
        ]
        )


})
.addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, provider, gotoFlow, endFlow }) => {

    const id = ctx.key.remoteJid;
    const abc = await provider.getInstance();

    switch (ctx.body) {
        case '1':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic(`🎉 ¡Gran noticia! El Plugin V3 está disponible por solo *$55 USD* en este momento. Pero, ¡date prisa! El precio aumentará a medida que sigamos mejorándolo. 🚀 *¡Aprovecha esta oferta especial ahora!* 😃💰`)
            await fallBack()
            await endFlow();
          break;
      
        case '2':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic(`💼 El pago es único, lo que significa que solo tendrás que realizar un pago.\n🎁 Te entregaremos el archivo fuente junto con las instrucciones de instalación y mantenimiento.\n💻 *¡Sin pagos recurrentes!* Es una oferta que no puedes dejar pasar. 😊👍`)
            await fallBack()
            await endFlow();
          break;
      
        case '3':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic(`📦 Actualmente, el plugin tiene una amplia gama de funciones, como enviar imágenes, videos, PDF, notas de voz y otros archivos, ¡incluso documentos de Word o Excel!\n📄📸🎥 Además, puedes utilizarlo para enviar encuestas por WhatsApp.`)
            await typing(provider, ctx, 2000);
            await flowDynamic(`*Funciones soportadas:*\n\n✅ Enviar Texto\n✅ Enviar Imagen\n✅ Enviar Video\n✅ Enviar PDF\n✅ Enviar Nota de Voz\n✅ Reenviar Mensaje a Grupo o Asesor\n✅ Enviar Medios Concatenados\n✅ Agendar Contacto Automáticamente\n✅ Enviar Enlace con Vista Previa\n✅ Enviar y Responder a Encuestas de WhatsApp
            `)
            await fallBack()
            await endFlow();
          break;
      
        case '4':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic(`📲 Puedes instalar el plugin en más de un dispositivo, pero ten en cuenta que el soporte técnico y las actualizaciones estarán disponibles solo para un dispositivo. El código fuente te permite instalarlo en N dispositivos, pero el soporte es exclusivo para uno. 🛠️📱\n\nRecuerda que queda estrictamente *prohibida la reproducción total o parcial de este contenido sin autorización previa por escrito.* Además, no me hago responsable si compras el producto con la intención de revenderlo. ¡Usa el plugin de manera responsable y disfruta de sus funciones! 😊🚫🔄`)
            await fallBack()
            await endFlow();
          break;
      
        case '5':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic(`📚 El plugin tiene instrucciones detalladas en video 🎥, donde se explican paso a paso los procedimientos de instalación. Para seguir las guías, es necesario tener un conocimiento mínimo sobre tu dispositivo móvil 📱 para ubicar y configurar los permisos requeridos. Te invitamos a *Probar la demo* en el *menu* principal`)
            await fallBack();
            await endFlow();
          break;
      
        case '6':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic([
                {
                body: `📱🔌 El plugin es un emocionante proyecto que *combina Tasker* (una aplicación de automatización) *con Autoresponder* (una aplicación de respuestas automáticas) para permitirte enviar medios a través de WhatsApp de una manera única. Funciona como un *intermediario* al establecer un *servidor local* en tu dispositivo 🌐, lo que te permite vincular tu WhatsApp de la misma forma que lo harías con WhatsApp Web. Esto abre un nuevo mundo de posibilidades para la comunicación entre Tasker y Autoresponder, como se muestra en este *diagrama 👆*`,
                media: "https://atubot.net.pe/wp-content/uploads/2023/12/comoFunciona.png"
                }])
            await typing(provider, ctx, 2000);
            await flowDynamic(`Esta solución creativa es perfecta para aquellos a quienes les gusta *cacharrear* y hacer las cosas por sí mismos, ya que les brinda la capacidad de *automatizar* diferentes aspectos de su experiencia en WhatsApp. Abre un nuevo mundo de posibilidades para la comunicación entre Tasker y Autoresponder🔥🤖`)
            await fallBack();
            await endFlow();
          break;

        case '7':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic("¡Por supuesto! Tendrás acceso a todas las emocionantes actualizaciones relacionadas con el Plugin V3. Sin embargo, es importante recordar que debes *cumplir con las reglas establecidas,* como la prohibición de la reproducción total o parcial de este contenido sin autorización previa por escrito. Además, comprar el producto con la intención de *revenderlo automáticamente te excluye de la lista de actualizaciones* y descuentos exclusivos para nuestros valiosos clientes. 🛡️🔒")
            await typing(provider, ctx, 2000);
            await flowDynamic(`¡Mantente en el camino correcto y disfruta de todas las ventajas de estar al día con las últimas novedades y mejoras del Plugin V3! 🚀📱😃`)
            await fallBack()
            await endFlow();
          break;

        case '8':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic("El Plugin V3 viene con un pequeño *requisito:* necesitas un dispositivo móvil de *gama media como mínimo* para aprovechar al máximo su potencial. 📱💡✨\n\n*Android 10 u 11 u 12*\n*4GB RAM a +*")
            await typing(provider, ctx, 2000);
            await flowDynamic(`*Un consejo antes de comprar:* te recomendamos probar primero la versión *demo* en el menú principal. Esto te permitirá asegurarte de que el Plugin V3 es completamente compatible con tu dispositivo, lo que garantiza *una compra consciente* y sin sorpresas. ¡No querrás perderte esta oportunidad de automatización! 😉🚀`)
            await fallBack();
            await endFlow();
          break;

        case '9':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx, 1000);
            await flowDynamic("El Plugin está diseñado para entusiastas de la tecnología con *conocimientos básicos* en aplicaciones de automatización como Tasker y AutoResponder. También es ideal *para pequeños negocios y emprendedores* que desean automatizar las respuestas de WhatsApp de una manera atractiva, enviando notas de voz, imágenes 📷 o PDFs 📄.")
            await typing(provider, ctx, 2000);
            await flowDynamic(`Si tu negocio tiene un *alto tráfico* de más de 300 mensajes al día o buscas una herramienta extremadamente fácil de usar y mantener, entonces esta herramienta podría no ser la más adecuada para ti.\nEn ese caso, te sugerimos explorar plataformas como ManyChat o Twilio. Si no estás seguro, ¡puedes probar la demo en el menú principal para asegurarte si se adapta a tus necesidades! 📱💼🚀😊"`)
            await fallBack()
            await endFlow();
          break;

        case '0':
            await sendReaction(provider, ctx, "🤖");
            await typing(provider, ctx);
            await flowDynamic([
                {
                body: `*${ctx.pushName}* 😊👋\nTengo estas opciones para ti:\n\n├1️⃣ _*Info Plugin V3*_\n├2️⃣ _*Comprar Plugin V3*_\n├3️⃣ _*Demo Plugin V3*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
                media: "https://atubot.net.pe/wp-content/uploads/2024/01/welcome-chatbot.jpg"
                }
            ])
            await gotoFlow(MenuFlow)
            await endFlow();
          break;
      
        default:
            await fallBack();
            await endFlow();
          break;
      }
      
    
})
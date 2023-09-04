import bot from "@bot-whatsapp/bot";
import GoogleSheetService from "../services/sheets/index.js";

import { typing, delay, sendReaction } from '../utils/utils.js';


const googleSheet = new GoogleSheetService(
  "1sijF27ZmQtxf5UeY0XamfLhkCBYZ8Szz4G9QrRtwNss"
);

const clave1 = `/(?:^|\s)actualizar v2(?=\s|$)/gi`

export const ActualizarFlow = bot .addKeyword(clave1, {regex: true})
  .addAction(async (ctx, { flowDynamic, provider }) => {
    const phoneNumber = ctx.from;

    await sendReaction(provider, ctx, "🔍");

    await delay(2000)

    const foundRowData = await googleSheet.searchAndReturnRowByPhoneNumber(phoneNumber);

    if (foundRowData !== null) {

      await sendReaction(provider, ctx, "✅");

    await typing(provider, ctx, 2000);
      flowDynamic(`¡Hola *${ctx.pushName}!* Con gusto, aquí tienes la versión más reciente del proyecto:`)
      await typing(provider, ctx, 2000);
      flowDynamic(`https://taskernet.com/shares/?user=AS35m8kO2Sf3H%2FI3H3GKoKtye5Q%2B6fB3%2BLIGVsjFCPmpGvIq9P56Qntx2mIgD1PbSOfhqpIBgixxvA%3D%3D&id=Project%3AATUBOT+V2.6`)
      await typing(provider, ctx, 2000);
      flowDynamic(`Para importar a Tasker, simplemente sigue este enlace 🔗 y haz clic en el botón de importar. Una vez allí, permites reemplazar todo y ¡listo! 😄`)
    } else {

      await sendReaction(provider, ctx, "❌");

    await typing(provider, ctx, 2000);
    flowDynamic(`⛔ Ups *${ctx.pushName}* No hemos encontrado tu ID de compra en nuestra base de datos. Si crees que se trata de un error, escríbenos y 🙎‍♂️ David te ayudará a solucionarlo`)
    await typing(provider, ctx, 2000);
    flowDynamic(`🛒 Si deseas adquirir nuestro plugin por primera vez, 💸 puedes hacerlo en el siguiente enlace:`)
    await typing(provider, ctx, 2000);
    flowDynamic(`https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7URTTUAX9K62G`)
    await typing(provider, ctx, 2000);
    flowDynamic(`💰 Una vez realizado el pago 💳, por favor envíanos una captura 📸 del mismo junto con tu correo electrónico 📧 para poder enviarte el archivo fuente correspondiente. Si deseas una version Demo puedes enviarme la palabra:\n *Demo V2* 🎉`)
    }
  });
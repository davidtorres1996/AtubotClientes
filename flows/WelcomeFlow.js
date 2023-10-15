import bot, { EVENTS } from "@bot-whatsapp/bot";
import { agregarTelefono } from '../utils/telefonos.js';

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow }  from "./MenuFlow.js";

export const WelcomeFlow = bot .addKeyword(bot.EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic, gotoFlow, provider}) =>{

    const id = ctx.from
    const agregado = await agregarTelefono(id);

    if (agregado) {

        await sendReaction(provider, ctx, "🤖");
        await typing(provider, ctx, 2000);
        await flowDynamic([
            {
            body: `¡Hola  *${ctx.pushName}!* 😊👋\n👨‍💻 David está programando y te atenderá en breve.\n\n🤖 Pero yo puedo ayudarte con estas opciones:\n├1️⃣ _*Info Plugin V2*_\n├2️⃣ _*Comprar Plugin V2*_\n├3️⃣ _*Demo Plugin V2*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
            media: "https://drive.google.com/uc?id=1TQb_zl-AcOVxbgkO5P_WMyZRDNgYfoK9"
            },
            "_◼️Escribe el numero para indicarme tu elección_\n_◼️Escribe menu cuando quieras volver a ver estas opciones_"
        ]
        )
        gotoFlow(MenuFlow, 1)
    } else {
        gotoFlow(MenuFlow)
       
    }

}
)

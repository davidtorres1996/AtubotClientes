import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import { MenuFlow }  from "./MenuFlow.js";

export const WelcomeFlow = bot .addKeyword(bot.EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic, state, gotoFlow}) =>{

    const myState = state.getMyState()
    if (!myState) {

        state.update({ welcome: "enviado" })

        await flowDynamic([
            {
            body: `¡Hola  *${ctx.pushName}!* 😊👋\n👨‍💻 David está programando y te atenderá en breve.\n\n🤖 Pero yo puedo ayudarte con estas opciones:\n├1️⃣ _*Info Plugin V2*_\n├2️⃣ _*Comprar Plugin V2*_\n├3️⃣ _*Demo Plugin V2*_\n├4️⃣ _*Servicios*_\n├5️⃣ _*Tutoriales*_\n└6️⃣ _*Tienda de Proyectos*_`,
            media: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj86Wt_os3MctzLNfnLSakOUmA2gR0RGfx2012b0FhFgARB9nvvSN7ebRNwEgy9VOTun_bn1u52IORclVLIxEaHi3YoEd75Pfw6ZKQwzRHRvQCHKlclkzXoKuQ6NNCXuItSMIYuXHBLxzwtAB9LG8mMrMfJx25mLbwLHJhtLGf9zNGx35KJHoFzXSW_BQj0/s1920/welcome-chatbot.jpg"
            },
            "_◼️Escribe el numero para indicarme tu elección_\n_◼️Escribe menu cuando quieras volver a ver estas opciones_"
        ]
        )
        await gotoFlow(MenuFlow)

      }

}
)

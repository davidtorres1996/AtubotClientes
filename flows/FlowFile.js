import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';


export const FlowFile = bot .addKeyword("filito")
.addAction(async (ctx, {flowDynamic, provider,endFlow}) =>{  

    const id = ctx.key.remoteJid

    const filePath = 'https://www.mediafire.com/file/pj7f8d1s8d27r32/ATUBOT_V2.prj.xml'
    console.log(filePath);
    await provider.sendFile(id, filePath);
    return endFlow("Archivo enviado");
    

})
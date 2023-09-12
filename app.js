import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import { getDay } from "date-fns";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/json";
import linkPreview from 'link-preview-js';

import { ActualizarFlow } from "./flows/ActualizarFlow.js";
import { DemoFlow }  from "./flows/DemoFlow.js";
import { WelcomeFlow }  from "./flows/WelcomeFlow.js";
import { MenuFlow }  from "./flows/MenuFlow.js";
import { FlowFile }  from "./flows/FlowFile.js";
import { LinkPreviewFlow }  from "./flows/LinkPreviewFlow.js";
import { InfoPluginFlow }  from "./flows/InfoPluginFlow.js";
import { ServiciosFlow }  from "./flows/ServiciosFlow.js";
import { StickerFlow }  from "./flows/StickerFlow.js";


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = bot.createFlow([
    ActualizarFlow,
    DemoFlow,
    WelcomeFlow,
    MenuFlow,
    FlowFile,
    LinkPreviewFlow,
    InfoPluginFlow,
    ServiciosFlow,
    StickerFlow
  ]);
  const adapterProvider = bot.createProvider(BaileysProvider);

  bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();

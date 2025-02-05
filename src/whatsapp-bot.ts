// src/whatsapp-bot.ts

import { Client, LocalAuth } from "whatsapp-web.js";
import ChatFlow from "./Chatflow";

const client = new Client({
  authStrategy: new LocalAuth(),
});

const chatFlow = new ChatFlow();
const chatHistory: { [key: string]: string[] } = {}; // Armazena histórico de conversas

client.on("qr", (qr) => {
  console.log("QR Code recebido, escaneie com o WhatsApp:", qr);
});

client.on("ready", () => {
  console.log("Cliente WhatsApp pronto!");
});

client.on("message", async (message) => {
  const contact = await message.getContact();
  const phoneNumber = contact.id.user;

  // Inicializa o histórico para este número, se necessário
  if (!chatHistory[phoneNumber]) {
    chatHistory[phoneNumber] = [];
  }

  // Processa a entrada do usuário
  const responses = chatFlow.processUserInput(message.body);

  // Adiciona a mensagem do usuário ao histórico
  chatHistory[phoneNumber].push(`Usuário: ${message.body}`);

  // Envia as respostas do bot
  responses.forEach((response) => {
    client.sendMessage(message.from, response);
    chatHistory[phoneNumber].push(`Bot: ${response}`);
  });
});

export { client, chatHistory };

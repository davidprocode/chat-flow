// src/server.ts

import express from "express";
import path from "path";
import { client, chatHistory } from "./whatsapp-bot";

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "views")));
app.use(express.json());

// Rota para o dashboard
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Rota para obter o histórico de conversas
app.get("/api/chat-history", (req, res) => {
  res.json(chatHistory);
});

// Rota para listar contatos
app.get("/api/contacts", async (req, res) => {
  const contacts = await client.getContacts();
  res.json(
    contacts.map((contact) => ({
      name: contact.name || contact.id.user,
      id: contact.id.user,
    }))
  );
});

// Rota para editar o fluxo de conversa
app.post("/api/update-flow", (req, res) => {
  try {
    // Atualize o fluxo de conversa aqui (ex.: gravando no arquivo `conversation.ts`)
    console.log("Novo fluxo recebido:", req.body);
    res.status(200).send("Fluxo atualizado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao atualizar o fluxo.");
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

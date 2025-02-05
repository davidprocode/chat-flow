// src/index.ts

import ChatFlow from "./ChatFlow";

const chat = new ChatFlow();

// Simular interações do usuário
function simulateChat(userInputs: string[]) {
  console.log(chat.getCurrentStateMessage()); // Mensagem inicial

  userInputs.forEach((input) => {
    const responses = chat.processUserInput(input);
    responses.forEach((response) => console.log(response));
  });
}

// Exemplo de interação
simulateChat(["1", "1", "back"]);

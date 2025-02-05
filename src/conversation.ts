// src/conversation.ts
const display = {
  greet: `Olá.  Eu sou o Bourbozinho, O assistente virtual do instututo Bourbon de Educação!`,
  menu: `Escolha uma opção:\n1. Informações sobre cursos\n2. Pagamentos\n3. Marcar reposões\n0. Sair`,
  options: {
    "1": "cursos_info",
    "2": "pagar_agora",
    "3": "reposicao_marcar",
    "0": "sair",
  },
  horarios: `1 - Manhã\n2 - Tarde\n`,
  cursos_tipo: `1 - Cursos Profissionalizantes\n2 - Cursos Técnicos\n3 - Faculdade Cruzeiro do Sul\n4 - Supletivo",`,
};

const conversationFlow = {
  start: {
    message: `${display.greet}\n${display.menu}`,
    options: display.options,
  },
  //Fluxo para Informações sobre cursos
  cursos_info: {
    message:
      "Você selecionou Informações sobre cursos.\n" + display.cursos_tipo,
    options: {
      "0": "sair",
    },
    customHandler: (input: string): string | null => {
      if (input.toLowerCase() === "1") {
        return "1 - Cursos Profissionalizantes";
      }
      if (input.toLowerCase() === "2") {
        return "2 - Cursos Técnicos";
      }
      if (input.toLowerCase() === "3") {
        return "3 - Faculdade Cruzeiro do Sul";
      }
      if (input.toLowerCase() === "4") {
        return "4 - Supletivo";
      }
      return null;
    },
  },

  pagametos: {
    message:
      "You reported a pagametos. Please describe the problem or type 'back' to return.",
    options: {
      back: "support",
    },
    customHandler: (input: string): string | null => {
      if (input.toLowerCase() === "0") {
        return "Thank you for your input. We will get back to you shortly.";
      }
      return null;
    },
  },
  //Fluxo para marcar reposições
  reposicao_marcar: {
    message: `Qual Horario?\n` + display.horarios,
    options: {
      "0": "sair",
    },
    customHandler: (input: string): string | null => {
      if (input.toLowerCase() === "1") {
        return "Manhã";
      }
      if (input.toLowerCase() === "2") {
        return "Tarde";
      }
      return null;
    },
  },

  sair: {
    message: "Thank you for visiting! Have a great day!",
    options: {},
  },
};

export default conversationFlow;

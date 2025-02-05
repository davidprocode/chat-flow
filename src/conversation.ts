// src/conversation.ts

const conversationFlow = {
  start: {
    message:
      "Olá.  Eu sou o Bourbozinho, O assistente virtual do instututo Bourbon de Educação!\nEscolha uma opção:\n1. Informações sobre cursos\n2. Pague agora\n3. Marcar reposões\n0. Sair",
    options: {
      "1": "cursos",
      "2": "reposição",
      "3": "pagametos",
      "0": "sair",
    },
  },
  cursos: {
    message:
      "You selected cursos. Escolha uma opção:\n1. Informações sobre cursos\n2. Pague agora\n3. Marcar reposões\n0. Sair",
    options: {
      "1": "cursos",
      "2": "reposição",
      "3": "pagametos",
      "0": "sair",
    },
  },
  reposição: {
    message:
      "You selected reposição. Escolha uma opção:\n1. Informações sobre cursos\n2. Pague agora\n3. Marcar reposões\n0. Sair",
    options: {
      "1": "cursos",
      "2": "reposição",
      "3": "pagametos",
      "0": "sair",
    },
  },
  pagametos: {
    message:
      "You reported a pagametos. Please describe the problem or type 'back' to return.",
    options: {
      back: "support",
    },
    customHandler: (input: string): string | null => {
      if (!["back"].includes(input.toLowerCase())) {
        return "Thank you for your input. We will get back to you shortly.";
      }
      return null;
    },
  },
  billing_inquiry: {
    message:
      "You selected Billing Inquiry. Please provide your invoice number or type 'back' to return.",
    options: {
      back: "support",
    },
    customHandler: (input: string): string | null => {
      if (!["back"].includes(input.toLowerCase())) {
        return "Your inquiry has been noted. We will contact you soon.";
      }
      return null;
    },
  },
  product_info: {
    message:
      "You requested Product Information. Here are the details: [Product Details]. Type 'back' to return.",
    options: {
      back: "sales",
    },
  },
  pricing: {
    message:
      "You asked about Pricing. Here is the pricing information: [Pricing Details]. Type 'back' to return.",
    options: {
      back: "sales",
    },
  },
  exit: {
    message: "Thank you for visiting! Have a great day!",
    options: {},
  },
};

export default conversationFlow;

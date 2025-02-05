// src/ChatFlow.ts

import conversationFlow from "./conversation";

class ChatFlow {
  private conversationFlow: { [key: string]: any };
  private currentState: string;

  constructor() {
    this.conversationFlow = conversationFlow; // Importa o fluxo de conversa
    this.currentState = "start";
  }

  public processUserInput(input: string): string[] {
    const state = this.conversationFlow[this.currentState];
    const responses: string[] = [];

    // Check if there's a custom handler for this state
    if (state.customHandler) {
      const customResponse = state.customHandler(input);
      if (customResponse) {
        responses.push(customResponse);
        if (state.options["back"]) {
          this.currentState = state.options["back"]; // Reset to the previous state after handling
          responses.push(this.conversationFlow[this.currentState].message);
        }
        return responses;
      }
    }

    // Handle standard options
    if (state.options[input]) {
      this.currentState = state.options[input];
      const nextState = this.conversationFlow[this.currentState];
      responses.push(nextState.message);
    } else {
      responses.push("Invalid option. Please try again.");
    }

    return responses;
  }

  public getCurrentStateMessage(): string {
    return this.conversationFlow[this.currentState].message;
  }

  public resetConversation(): void {
    this.currentState = "start";
  }
}

export default ChatFlow;

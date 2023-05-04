import { create } from "venom-bot";
import questions from "./questions.json?v=1" assert { type: "json" };

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

try {
  create({
    session: "chat-gpt",
    multidevice: true,
  })
    .then((client) => start(client))
    .catch((erro) => {
      console.log(erro);
    });
} catch (error) {
  console.log(error);
}

async function start(client) {
  // estado atual do jogo
  let state = {
    questions: [],
    currentIndex: -1,
    lastWinner: null,
  };

  console.log("state",state);
  client.onAnyMessage( (message) => {
    try {
      if (message.body.toLowerCase() === "!trivia") {
        state.questions = shuffle(questions).slice(0, 6);
        state.currentIndex = -1;
        state.lastWinner = null;

        // const selectedQuestions = shuffle(questions).slice(0, 6);
        // console.log("state.questions", state.questions);

         client.sendText(
            message.from,
            "Olá! Vamos começar a trivia? A primeira pergunta é:\n\n" +
              state.questions[0].question
          );
          state.currentIndex++;

        // message.from é o número do usuário que enviou a msg "hello"
        // client.sendText(message.from, );
      }
    } catch (error) {
      console.log(error);
    }
  });
}

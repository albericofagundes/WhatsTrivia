import { create } from "venom-bot";
import questions from "./questions.json?v=1" assert { type: "json" };

let isGameRunning = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function updateWinner(state, winnerName) {
  if (state.winners.hasOwnProperty(winnerName)) {
    state.winners[winnerName] += 3; // Incrementa 3 pontos para o vencedor existente
  } else {
    state.winners[winnerName] = 3; // Atribui 3 pontos para um novo vencedor
  }
}

// async function sendQuestion(isGameRunning, message, question, answer) {
//   try {
//     if (message.body === answer && isGameRunning) {
//       await client.sendText(message.from, `Parabens, acertou`);
//       console.log("userAnswer===answer");
//     }
//   } catch (error) {
//     console.log("Error receveing question:", error);
//   }
// }

try {
  create({
    session: "WhatsTrivia",
    multidevice: true,
  }).then((client) => {
    start(client);
    console.log("Connected to WhatsTrivia");
  });
} catch (error) {
  console.log("Error:", error);
}

function start(client) {
  let state = {
    isGameRunning: false,
    questions: [],
    answers: [],
    currentIndex: 0,
    lastWinner: null,
    selectedQuestions: [],
    winners: {},
  };

  console.log("function start(client isGameRunning", isGameRunning);
  console.log("function start(client) state.answer", state.answers);
  console.log("function start(client) state.question", state.questions);

  function increment() {
    state.currentIndex++;
    console.log("increment");
  }

  async function processAnswer(client, message) {}

  client.onAnyMessage(async (message) => {
    console.log("onAnyMessage isGameRunning", state.isGameRunning);
    console.log("message", message.body);
    console.log("state.currentIndex", state.currentIndex);

    if (message.body === "!trivia" && state.isGameRunning === true) {
      await client.sendText(
        message.from,
        `Trivia já inicializado, aguarde finalizar`
      );
    }

    if (message.body === "!trivia" && state.isGameRunning === false) {
      state.selectedQuestions = shuffle(questions).slice(0, 6);

      state.questions = state.selectedQuestions.map((q) => q.question);
      state.answers = state.selectedQuestions.map((q) => q.answer);

      console.log("state.questions", state.questions);
      console.log("state.answers", state.answers);

      await client.sendText(message.from, `Trivia iniciado`);
      await sleep(2000); // Delay de 3 segundos antes de mostrar a próxima pergunta

      let question1 = state.questions[state.currentIndex];
      await client.sendText(message.from, `${question1}`);

      console.log(state.questions[state.currentIndex]);
      console.log(state.answers[state.currentIndex]);

      state.isGameRunning = true;
    }

    if (
      message.body === state.answers[state.currentIndex] &&
      state.isGameRunning === true
    ) {
      const winnerName = message.sender.pushname;
      await client.sendText(
        message.from,
        `Parabéns, ${winnerName}! Você acertou!`
      );
      updateWinner(state, winnerName);

      // await client.sendText(message.from, `acertou`);

      state.currentIndex++;
      await sleep(2000); // Delay de 3 segundos antes de mostrar a próxima pergunta

      console.log("state.currentIndex", state.currentIndex);
      console.log("state.questions", state.questions[state.currentIndex]);
      console.log("state.answers", state.answers[state.currentIndex]);
      if (
        !(state.currentIndex === state.selectedQuestions.length) &&
        state.isGameRunning == true
      ) {
        let question = state.questions[state.currentIndex];
        await client.sendText(message.from, `${question}`);

        console.log("ainda nao terminou");
        console.log("state.currentIndex", state.currentIndex);
        console.log(
          "state.selectedQuestions.length",
          state.selectedQuestions.length
        );
      } else {
        console.log("agora terminou");
        await client.sendText(message.from, `Trivia finalizado`);

        if (Object.keys(state.winners).length > 0) {
          let winnersList = "Lista de Acertadores:\n";
          for (const winner in state.winners) {
            winnersList += `${winner}: ${state.winners[winner]} pontos\n`;
          }
          await client.sendText(message.from, winnersList);
        } else {
          await client.sendText(message.from, "Nenhum acertador nesta trivia.");
        }

        state.isGameRunning = false;
      }
    }
  });
}

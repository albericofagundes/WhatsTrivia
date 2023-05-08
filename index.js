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

async function sendQuestion(isGameRunning, message, question, answer) {
  try {
    if (message.body === answer && isGameRunning) {
      await client.sendText(message.from, `Parabens, acertou`);
      console.log("userAnswer===answer");
    }

    // await client.sendText(message.from, `${question}`);
  } catch (error) {
    console.log("Error receveing question:", error);
  }
}

// async function sendQuestion(client, question, message) {
//   try {
//     await client.sendText(message.from, `${question}`);
//   } catch (error) {
//     console.log("Error sending question:", error);
//   }
// }

// async function startTriviaGame(client, questions) {
//   const shuffledQuestions = shuffle(questions).slice(0, 6);
//   const state = {
//     currentIndex: 0,
//     scores: {},
//     ranking: []
//   };

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
  };

  // console.log("function start(client)selectedQuestions", selectedQuestions);
  console.log("function start(client isGameRunning", isGameRunning);
  console.log("function start(client) state.answer", state.answers);
  console.log("function start(client) state.question", state.questions);

  function increment() {
    state.currentIndex++;
    console.log("increment");
  }

  // async function sendQuestion(question, message) {
  //   await client.sendText(message.from, `${question}`);
  // }

  async function startTriviaGame(isGameRunning, message) {
    const selectedQuestions = shuffle(questions).slice(0, 6);
    let { question, answer } = selectedQuestions[state.currentIndex];
    console.log("startTriviaGame question", question);
    console.log("startTriviaGame answer", answer);
    console.log("startTriviaGame isGameRunning", isGameRunning);
    console.log("startTriviaGame message.body", message.body);
    try {
      if (message.body === "!trivia" && isGameRunning == false) {
        await client.sendText(message.from, `Trivia iniciado`);
        await sleep(2000); // Delay de 3 segundos antes de mostrar a próxima pergunta
        await client.sendText(message.from, `${question}`);
        isGameRunning = true;
        console.log("startTriviaGameAFTER isGameRunning", isGameRunning);
      }
    } catch (error) {
      console.log("Error sending question:", error);
    }
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
      const selectedQuestions = shuffle(questions).slice(0, 6);
      console.log("selectedQuestions", selectedQuestions);
      state.questions = selectedQuestions.map((q) => q.question);
      state.answers = selectedQuestions.map((q) => q.answer);

      console.log("state.questions", state.questions);
      console.log("state.answers", state.answers);

      // state.questions = selectedQuestions.questions;
      // state.answers = selectedQuestions.answer;

      await client.sendText(message.from, `Trivia iniciado`);
      await sleep(2000); // Delay de 3 segundos antes de mostrar a próxima pergunta
      // await client.sendText(message.from, `${question}`);
      let question1 = state.questions[state.currentIndex];
      await client.sendText(message.from, `${question1}`);
      // console.log("startTriviaGame question", question);
      // console.log("startTriviaGame answer", answer);
      // console.log("startTriviaGame isGameRunning", isGameRunning);
      // console.log("startTriviaGame message.body", message.body);
      console.log(state.questions[state.currentIndex]);
      console.log(state.answers[state.currentIndex]);
      state.isGameRunning = true;
    }

    if (
      message.body === state.answers[state.currentIndex] &&
      state.isGameRunning === true
    ) {
      await client.sendText(message.from, `acertou`);

      state.currentIndex++;
      await sleep(2000); // Delay de 3 segundos antes de mostrar a próxima pergunta

      console.log("state.currentIndex", state.currentIndex);
      console.log("state.questions", state.questions[state.currentIndex]);
      console.log("state.answers", state.answers[state.currentIndex]);
      let question = state.questions[state.currentIndex];
      await client.sendText(message.from, `${question}`);
    }

    // if (message.body === "!trivia" && isGameRunning == false) {
    //   startTriviaGame(isGameRunning, message);
    // } else if (isGameRunning == true) {
    //   sendQuestion(message);
    // }

    // console.log("isGameRunning", isGameRunning);

    // if (message.body === answer && isGameRunning) {
    //   await client.sendText(message.from, `Parabens, acertou`);
    //   console.log("userAnswer===answer");
    //   increment();
    //   sendQuestion(question, message);
    // }
  });
}

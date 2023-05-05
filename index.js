import { create } from "venom-bot";
import questions from "./questions.json?v=1" assert { type: "json" };

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
    questions: [],
    currentIndex: 0,
    lastWinner: null,
  };

  function increment() {
    state.currentIndex++;
    console.log("userAnswer===answer");
  }

  const selectedQuestions = shuffle(questions).slice(0, 6);
  let isGameRunning = false;

  client.onAnyMessage(async (message) => {
    const { question, answer } = selectedQuestions[state.currentIndex];
    console.log("message", message.body);
    console.log("state.currentIndex", state.currentIndex);

    console.log("question", question);
    console.log("answer", answer);

    if (message.body === "!trivia" && !isGameRunning) {
      isGameRunning = false;

      await client.sendText(message.from, `${question}`);
    }

    if (message.body === answer) {
      console.log("userAnswer===answer");
      increment();
    }
  });
}

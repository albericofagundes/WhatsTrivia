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
  // .catch((error) => {
  //   console.log("Error connecting to WhatsApp Business API", error);
  // });
} catch (error) {
  console.log("Error:", error);
}

// create({
//   session: "WhatsTrivia",
//   multidevice: true,
// })
//   .then((client) => {
//     start(client);
//     console.log("Connected to WhatsTrivia");
//   })
//   .catch((error) => {
//     console.log("Error connecting to WhatsApp Business API", error);
//   });
let isGameRunning = false;

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

      // const { question } = selectedQuestions[state.currentIndex];

      // console.log("answer", answer);

      // const userAnswer = (await client.onMessage(message.from)).body;

      await client.sendText(message.from, `${question}`);
      // const userAnswer = (await client.onMessage(message.from));
      //       console.log("userAnswer", userAnswer.body);

      // isGameRunning = true;
      // const userAnswer = client.onAnyMessage(message);
      // console.log("userAnswer", userAnswer);

      // for (let contact of message.chat.contacts) {
      //   scores[contact.number] = 0;
      // }

      // for (let i = 0; i < selectedQuestions.length) {
      //   // console.log("selectedQuestions[i]", selectedQuestions[i]);
      //   const { question, answer } = selectedQuestions[i];

      //   await client.sendText(message.from, `${question}`);
      //   // Aguarde a resposta do usuário
      //   const userAnswer = await client.onMessage(message.from);
      //   console.log("userAnswer", userAnswer);
      //   console.log("question", question);

      //   if (userAnswer === answer) {
      //     console.log("userAnswer", userAnswer);
      //     console.log("answer", answer);
      //     i++;
      //   } else {
      //     // client.sendText("errado");
      //     console.log("userAnswer", userAnswer);
      //     console.log("answer", answer);
      //   }

      //   // client.sendText(message.from, question);
      //   // client.onMessage(async (message) => {
      //   //   // const userAnswer = message.body.toLowerCase();

      //   // });
      // }

      // state.questions = questions;

      // const msg = selectedQuestions[state.currentIndex].question;
      // const response = selectedQuestions[state.currentIndex].answer;
      // console.log("msg", msg);

      // client.sendText(
      //   message.from,
      //   `Olá! Vamos começar a trivia? A primeira pergunta é:\n\n` + msg
      // );
      // if (message.body.toLowerCase() === response) {
      //   client.sendText(message.from, `Acertou Miseravel`);
      // }
    }

    if (message.body === answer && isGameRunning) {
      console.log("userAnswer===answer");
      increment();
    }

    // if (message.body.toLowerCase() === response) {
    // }
  });

  // // estado atual do jogo
  // let state = {
  //   questions: [],
  //   currentIndex: 0,
  //   lastWinner: null,
  // };
  // console.log("state", state);

  // async function startGame(client, state, message, questions) {
  //   console.log("startGame");

  //   try {
  //     // Select six random questions from the questions array
  //     // const questions = require("./questions.json");
  //     const selectedQuestions = shuffle(questions).slice(0, 6);

  //     console.log("selectedQuestions", selectedQuestions);

  //     client.sendText(
  //       message.from,
  //       "Olá! Vamos começar a trivia? A primeira pergunta é:\n\n"
  //     );

  //     // Send the first question to the participant
  //     await sendQuestion(client, selectedQuestions, state, questions, message);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // async function sendQuestion(
  //   client,
  //   selectedQuestions,
  //   state,
  //   message,
  //   questions
  // ) {
  //   console.log("sendQuestion");
  //   const msg = " selectedQuestions[state.currentIndex].questions;";
  //   // const msg = selectedQuestions[state.currentIndex].questions;
  //   try {
  //     client.sendText(message.from, msg);
  //     state.currentIndex++;
  //     console.log("state.currentIndex", state.currentIndex);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // //   state.questions = shuffle(questions).slice(0, 6);
  // //   state.currentIndex = -1;
  // //   state.lastWinner = null;

  // client.onAnyMessage((message) => {
  //   console.log("message.body", message.body);
  //   try {
  //     if (message.body.toLowerCase() === "!trivia") {
  //       startGame(client, state, message, questions);
  //       // const selectedQuestions = shuffle(questions).slice(0, 6);
  //       // console.log("state.questions", state.questions);
  //       // client.sendText(
  //       //   message.from,
  //       //   "Olá! Vamos começar a trivia? A primeira pergunta é:\n\n" +
  //       //     state.questions[0].question
  //       // );
  //       // state.currentIndex++;
  //       // message.from é o número do usuário que enviou a msg "hello"
  //       // client.sendText(message.from, );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
}

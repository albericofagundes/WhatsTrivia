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

function start(client) {
  let state = {
    questions: [],
    currentIndex: 0,
    lastWinner: null,
  };

  client.onAnyMessage((message) => {
    if (message.body.toLowerCase() === "!trivia") {
      // state.questions = questions;
      const selectedQuestions = shuffle(questions).slice(0, 6);
      console.log("selectedQuestions", selectedQuestions);
    }
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

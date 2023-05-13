const questions = [
  {
    question: "Qual é o filme vencedor do Oscar de Melhor Filme em 2020?",
    answer: "Parasite",
    partialAnswer: ["Parasite"],
  },
  {
    question: "Quem dirigiu o filme 'Pulp Fiction'?",
    answer: "Quentin Tarantino",
    partialAnswer: ["Quentin Tarantino", "Tarantino"],
  },
  {
    question:
      "Qual é o nome do personagem interpretado por Robert Downey Jr. na franquia 'Iron Man'?",
    answer: "Tony Stark",
    partialAnswer: ["Tony Stark"],
  },
  {
    question:
      "Qual é o filme de Quentin Tarantino que se passa durante a Segunda Guerra Mundial?",
    answer: "Inglourious Basterds",
    partialAnswer: ["Inglourious Basterds"],
  },
  {
    question: "Qual é o filme vencedor do Oscar de Melhor Animação em 2022?",
    answer: "Encanto",
    partialAnswer: ["Encanto"],
  },

  {
    question:
      "Qual é o nome da banda britânica conhecida pelo hit 'Bohemian Rhapsody'?",
    answer: "Queen",
    partialAnswer: ["Queen"],
  },
];

import { create } from "venom-bot";

function cleanString(string) {
  // Remove os acentos
  const textoSemAcentos = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Converte para caixa baixa
  const textoSemAcentosCaixaBaixa = textoSemAcentos.toLowerCase();

  return textoSemAcentosCaixaBaixa;
}

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
    fix_answers: [],
    partialAnswers: [],
    currentIndex: 0,
    lastWinner: null,
    selectedQuestions: [],
    winners: {},
    isExpiredTime: false,
  };

  async function cleanStatus(client, state, message) {
    state.isGameRunning = false;
    state.answers = [];
    state.fix_answers = [];
    state.partialAnswers = [];
    state.currentIndex = 0;
    state.lastWinner = null;
    state.winners = {};
    state.isExpiredTime = false;
  }

  async function endTrivia(client, state, message) {
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
    state.isGameRunning = false; // Adicione essa linha para finalizar a trivia

    cleanStatus(client, state, message);
  }

  // async function endTrivia(client, state, message) {
  //   await client.sendText(message.from, `Trivia finalizado`);

  //   if (Object.keys(state.winners).length > 0) {
  //     let winnersList = "Lista de Acertadores:\n";
  //     for (const winner in state.winners) {
  //       winnersList += `${winner}: ${state.winners[winner]} pontos\n`;
  //     }
  //     await client.sendText(message.from, winnersList);
  //   } else {
  //     await client.sendText(message.from, "Nenhum acertador nesta trivia.");
  //   }

  //   cleanStatus(client, state, message);
  // }

  // async function correctAnswerRace(client, state, message, startTemp) {
  //   if (startTemp === true) {
  //     state.isExpiredTime = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(true);
  //       }, 9999);
  //     });
  //   }

  //   Promise.race([state.isExpiredTime])
  //     .then(async (result) => {
  //       console.log("result", result);
  //       console.log("state.isExpiredTime", state.isExpiredTime);

  //       if (result === true) {
  //         console.log("state.isExpiredTime", result);

  //         await client.sendText(
  //           message.from,
  //           `A resposta correta seria:\n${
  //             state.answers[state.currentIndex]
  //           }!\nTempo Expirado,\nNinguém pontuou,\n`
  //         );

  //         // A pessoa acertou a resposta dentro do tempo
  //       } else {
  //         console.log("result", result);
  //         const winnerName = message.sender.pushname;

  //         await client.sendText(
  //           message.from,
  //           `A resposta é:\n${
  //             state.answers[state.currentIndex]
  //           }!\nParabéns, ${winnerName}! Você acertou!`
  //         );

  //         updateWinner(state, winnerName);
  //       }
  //       state.currentIndex++;
  //       checkTrivia(client, state, message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // async function correctAnswerRace(client, state, message, startTemp) {
  //   if (startTemp === true) {
  //     state.isExpiredTime = new Promise((resolve) => {
  //       setTimeout(() => {
  //         resolve(true);
  //       }, 9999);
  //     });
  //   }

  //   // Aguarda a resposta correta ou a expiração do tempo
  //   const result = await Promise.race([state.isExpiredTime, waitForAnswer()]);

  //   if (result === true) {
  //     await client.sendText(
  //       message.from,
  //       `A resposta correta seria:\n${state.answers[state.currentIndex]}\nTempo expirado, ninguém pontuou.`
  //     );
  //   } else {
  //     const winnerName = message.sender.pushname;

  //     await client.sendText(
  //       message.from,
  //       `A resposta é:\n${state.answers[state.currentIndex]}\nParabéns, ${winnerName}! Você acertou!`
  //     );

  //     updateWinner(state, winnerName);
  //   }

  //   state.currentIndex++;
  //   checkTrivia(client, state, message);

  //   async function waitForAnswer() {
  //     return new Promise((resolve) => {
  //       client.onAnyMessage((msg) => {
  //         const msg_body = cleanString(msg.body);
  //         const expectedAnswer = cleanString(state.answers[state.currentIndex]);

  //         if (msg.from === message.from && msg_body === expectedAnswer) {
  //           resolve(false); // A resposta está correta
  //         }
  //       });
  //     });
  //   }
  // }

  async function correctAnswerRace(client, state, message, startTemp) {
    console.log("correctAnswerRace state.isGameRunning=>", state.isGameRunning);

    const isGameRunning = checkTrivia(client, state, message);
    console.log("correctAnswerRace isGameRunning", isGameRunning);

    if (isGameRunning === false) {
      endTrivia(client, state, message);
      return;
    } else {
      if (startTemp === true) {
        state.isExpiredTime = new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 9999);
        });
      }

      try {
        const result = await Promise.race([
          state.isExpiredTime,
          waitForAnswer(),
        ]);

        if (result === true) {
          await client.sendText(
            message.from,
            `A resposta correta seria:\n${
              state.answers[state.currentIndex]
            }\nTempo expirado, ninguém pontuou.`
          );
        } else {
          const winnerName = message.sender.pushname;

          await client.sendText(
            message.from,
            `A resposta é:\n${
              state.answers[state.currentIndex]
            }\nParabéns, ${winnerName}! Você acertou!`
          );

          updateWinner(state, winnerName);
        }
        state.currentIndex++;

        checkTrivia(client, state, message);
      } catch (error) {
        // Lida com erros de forma apropriada
        console.error("Erro:", error);
      }
    }

    function waitForAnswer() {
      return new Promise((resolve) => {
        client.onAnyMessage((msg) => {
          const msg_body = cleanString(msg.body);
          const expectedAnswer = cleanString(state.answers[state.currentIndex]);

          if (msg.from === message.from && msg_body === expectedAnswer) {
            resolve(false); // A resposta está correta
          }
        });
      });
    }
  }

  // async function sendQuestions(client, state, message) {
  //   console.log("sendQuestions");
  //   console.log("state.currentIndex", state.currentIndex);
  //   console.log(
  //     "state.selectedQuestions.length",
  //     state.selectedQuestions.length
  //   );

  //   await sleep(1212); // Delay de x segundos antes de mostrar a próxima pergunta
  //   let question = state.questions[state.currentIndex];
  //   await client.sendText(message.from, `${question}`);
  //   correctAnswerRace(client, state, message, true);
  // }

  async function sendQuestions(client, state, message) {
    console.log("sendQuestions");
    console.log("state.currentIndex", state.currentIndex);
    console.log(
      "state.selectedQuestions.length",
      state.selectedQuestions.length
    );

    // Verifica se a trivia já foi finalizada
    if (state.currentIndex >= state.selectedQuestions.length) {
      await client.sendText(message.from, `Trivia finalizado`);
      await showWinners(client, state, message); // Exibe a lista de vencedores
      endTrivia(client, state, message);
      cleanStatus(client, state, message);
      return; // Interrompe a função
    }

    await sleep(1212); // Delay de x segundos antes de mostrar a próxima pergunta
    let question = state.questions[state.currentIndex];
    await client.sendText(message.from, `${question}`);
  }

  async function startTriviardy(client, state, message) {
    state.selectedQuestions = shuffle(questions).slice(0, 6);
    state.questions = state.selectedQuestions.map((q) => q.question);
    state.answers = state.selectedQuestions.map((q) => q.answer);

    state.fix_answers = state.selectedQuestions.map((q) =>
      cleanString(q.answer)
    );

    console.log(
      "state.questions",
      state.questions,
      "indice",
      state.currentIndex
    );
    console.log("state.answers", state.answers, "indice", state.currentIndex);
    console.log(
      "state.fix_answers",
      state.fix_answers,
      "indice",
      state.currentIndex
    );

    await client.sendText(message.from, `Trivia iniciado`);
    state.isGameRunning = true;
    checkTrivia(client, state, message);
  }

  async function checkTrivia(client, state, message) {
    if (state.currentIndex >= state.selectedQuestions.length) {
      return false;
      // endTrivia(client, state, message);
    }

    if (
      state.currentIndex < state.selectedQuestions.length &&
      state.isGameRunning == true
    ) {
      sendQuestions(client, state, message);
      correctAnswerRace(client, state, message, true); // Chamada corrigida
    }
  }

  client.onAnyMessage(async (message) => {
    let msg_body = cleanString(message.body);

    if (message.body == "!endtrivia") {
      await client.sendText(message.from, `Trivia interrompido`);
      endTrivia(client, state, message);
    }

    if (message.body == "!trivia" && state.isGameRunning === true) {
      await client.sendText(
        message.from,
        `Trivia já inicializado, aguarde finalizar`
      );
    }

    if (message.body === "!trivia" && state.isGameRunning === false) {
      startTriviardy(client, state, message);
    }

    if (
      msg_body === state.fix_answers[state.currentIndex] &&
      state.isGameRunning === true
    ) {
      console.log("msg_body", msg_body);
      console.log(
        "state.fix_answers[state.currentIndex]",
        state.fix_answers[state.currentIndex]
      );

      correctAnswerRace(client, state, message, false);
    }
  });
}

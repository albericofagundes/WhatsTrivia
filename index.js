const questions = [
  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2018?",
    answer: "França",
    partialanswer: ["França"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador detém o recorde de maior número de gols marcados em Copas do Mundo?",
    answer: "Marta",
    partialanswer: ["Marta"],
  },

  {
    category: "futebol",
    question: "Qual é o maior campeão da Liga dos Campeões da UEFA?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador brasileiro foi eleito o melhor do mundo pela FIFA cinco vezes?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual clube tem mais títulos da Copa Libertadores da América?",
    answer: "Club Atlético Independiente",
    partialanswer: ["Club Atlético Independiente", "Independiente"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador venceu o prêmio de melhor do mundo da FIFA em 2020?",
    answer: "Robert Lewandowski",
    partialanswer: ["Robert Lewandowski", "Lewandowski"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Premier League inglesa?",
    answer: "Manchester United",
    partialanswer: ["Manchester United"],
  },

  {
    category: "futebol",
    question: "Qual seleção conquistou o maior número de Copas do Mundo?",
    answer: "Brasil",
    partialanswer: ["Brasil"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador argentino venceu o prêmio de melhor do mundo da FIFA seis vezes?",
    answer: "Lionel Messi",
    partialanswer: ["Lionel Messi", "Messi"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Serie A italiana?",
    answer: "Juventus",
    partialanswer: ["Juventus"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'O Rei'?",
    answer: "Pelé",
    partialanswer: ["Pelé"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2014?",
    answer: "Alemanha",
    partialanswer: ["Alemanha"],
  },

  {
    category: "futebol",
    question: "Qual é o estádio com maior capacidade de público do mundo?",
    answer: "Rungrado 1º de Maio",
    partialanswer: ["Rungrado 1º de Maio"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa do Brasil?",
    answer: "Cruzeiro",
    partialanswer: ["Cruzeiro"],
  },

  {
    category: "futebol",
    question: "Qual jogador argentino é conhecido como 'El Pibe'?",
    answer: "Diego Maradona",
    partialanswer: ["Diego Maradona", "Maradona"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Copa Libertadores da América no Brasil?",
    answer: "São Paulo",
    partialanswer: ["São Paulo"],
  },

  {
    category: "futebol",
    question: "Qual jogador português é conhecido como 'CR7'?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Liga dos Campeões da UEFA?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador brasileiro venceu o prêmio de melhor do mundo da FIFA três vezes?",
    answer: "Ronaldo",
    partialanswer: ["Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2010?",
    answer: "Espanha",
    partialanswer: ["Espanha"],
  },

  {
    category: "futebol",
    question: "Qual jogador argentino é conhecido como 'La Pulga'?",
    answer: "Lionel Messi",
    partialanswer: ["Lionel Messi", "Messi"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa do Mundo?",
    answer: "Brasil",
    partialanswer: ["Brasil"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Brasileiro?",
    answer: "Palmeiras",
    partialanswer: ["Palmeiras"],
  },

  {
    category: "futebol",
    question: "Qual é o estádio conhecido como 'Maracanã'?",
    answer: "Estádio Jornalista Mário Filho",
    partialanswer: ["Estádio Jornalista Mário Filho", "Maracanã"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador português venceu o prêmio de melhor do mundo da FIFA em 2016 e 2017?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Bundesliga alemã?",
    answer: "Bayern de Munique",
    partialanswer: ["Bayern de Munique"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Ronaldinho Gaúcho'?",
    answer: "Ronaldinho",
    partialanswer: ["Ronaldinho"],
  },

  {
    category: "futebol",
    question: "Qual seleção conquistou a Copa do Mundo de 2006?",
    answer: "Itália",
    partialanswer: ["Itália"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Argentino?",
    answer: "River Plate",
    partialanswer: ["River Plate"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'O Fenômeno'?",
    answer: "Ronaldo",
    partialanswer: ["Ronaldo"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador italiano venceu o prêmio de melhor do mundo da FIFA em 2006?",
    answer: "Fabio Cannavaro",
    partialanswer: ["Fabio Cannavaro", "Cannavaro"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Copa do Mundo de Clubes da FIFA?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual é o jogador com mais gols marcados em uma única edição da Copa do Mundo?",
    answer: "Just Fontaine",
    partialanswer: ["Just Fontaine", "Fontaine"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa América?",
    answer: "Uruguai",
    partialanswer: ["Uruguai"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador francês venceu o prêmio de melhor do mundo da FIFA em 2018?",
    answer: "Luka Modric",
    partialanswer: ["Luka Modric", "Modric"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Espanhol?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador brasileiro venceu o prêmio de melhor do mundo da FIFA em 2002?",
    answer: "Ronaldo",
    partialanswer: ["Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa América?",
    answer: "Uruguai",
    partialanswer: ["Uruguai"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa do Brasil?",
    answer: "Grêmio",
    partialanswer: ["Grêmio"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador português venceu o prêmio de melhor do mundo da FIFA em 2013 e 2014?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question:
      "Qual é o jogador com mais gols marcados na história da Copa do Mundo?",
    answer: "Marta",
    partialanswer: ["Marta"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 1998?",
    answer: "França",
    partialanswer: ["França"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Copa Libertadores da América?",
    answer: "Club Atlético Independiente",
    partialanswer: ["Club Atlético Independiente", "Independiente"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Zico'?",
    answer: "Arthur Antunes Coimbra",
    partialanswer: ["Arthur Antunes Coimbra", "Zico"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Copa do Mundo de Clubes da FIFA?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador argentino venceu o prêmio de melhor do mundo da FIFA em 2020?",
    answer: "Lionel Messi",
    partialanswer: ["Lionel Messi", "Messi"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa América?",
    answer: "Uruguai",
    partialanswer: ["Uruguai"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador espanhol venceu o prêmio de melhor do mundo da FIFA em 2010 e 2012?",
    answer: "Andrés Iniesta",
    partialanswer: ["Andrés Iniesta", "Iniesta"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa Intercontinental?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador brasileiro venceu o prêmio de melhor do mundo da FIFA em 2007?",
    answer: "Kaká",
    partialanswer: ["Kaká"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Garrincha'?",
    answer: "Manuel Francisco dos Santos",
    partialanswer: ["Manuel Francisco dos Santos", "Garrincha"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2014?",
    answer: "Alemanha",
    partialanswer: ["Alemanha"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa do Brasil?",
    answer: "Cruzeiro",
    partialanswer: ["Cruzeiro"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador argentino venceu o prêmio de melhor do mundo da FIFA em 2019?",
    answer: "Lionel Messi",
    partialanswer: ["Lionel Messi", "Messi"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Francês?",
    answer: "Saint-Étienne",
    partialanswer: ["Saint-Étienne"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador italiano venceu o prêmio de melhor do mundo da FIFA em 1982?",
    answer: "Paolo Rossi",
    partialanswer: ["Paolo Rossi", "Rossi"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa das Confederações?",
    answer: "Brasil",
    partialanswer: ["Brasil"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador espanhol venceu o prêmio de melhor do mundo da FIFA em 2010?",
    answer: "Iker Casillas",
    partialanswer: ["Iker Casillas", "Casillas"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Holandês?",
    answer: "Ajax",
    partialanswer: ["Ajax"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Romário'?",
    answer: "Romário de Souza Faria",
    partialanswer: ["Romário de Souza Faria", "Romário"],
  },

  {
    category: "futebol",
    question: "Qual jogador argentino é conhecido como 'La Pulga'?",
    answer: "Lionel Messi",
    partialanswer: ["Lionel Messi", "Messi"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2006?",
    answer: "Itália",
    partialanswer: ["Itália"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Brasileiro?",
    answer: "Palmeiras",
    partialanswer: ["Palmeiras"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador francês venceu o prêmio de melhor do mundo da FIFA em 2018?",
    answer: "Kylian Mbappé",
    partialanswer: ["Kylian Mbappé", "Mbappé"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Copa do Mundo de Clubes da FIFA?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Ronaldinho Gaúcho'?",
    answer: "Ronaldo de Assis Moreira",
    partialanswer: ["Ronaldo de Assis Moreira", "Ronaldinho Gaúcho"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa das Confederações?",
    answer: "Brasil",
    partialanswer: ["Brasil"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador português venceu o prêmio de melhor do mundo da FIFA em 2019?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Alemão?",
    answer: "Bayern de Munique",
    partialanswer: ["Bayern de Munique"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Ronaldo Fenômeno'?",
    answer: "Ronaldo Luís Nazário de Lima",
    partialanswer: ["Ronaldo Luís Nazário de Lima", "Ronaldo Fenômeno"],
  },

  {
    category: "futebol",
    question: "Qual jogador argentino é conhecido como 'El Apache'?",
    answer: "Carlos Tevez",
    partialanswer: ["Carlos Tevez", "Tevez"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 1998?",
    answer: "França",
    partialanswer: ["França"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da UEFA Champions League?",
    answer: "Real Madrid",
    partialanswer: ["Real Madrid"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Zico'?",
    answer: "Arthur Antunes Coimbra",
    partialanswer: ["Arthur Antunes Coimbra", "Zico"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Argentino?",
    answer: "River Plate",
    partialanswer: ["River Plate"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador português venceu o prêmio de melhor do mundo da FIFA em 2008?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa do Mundo?",
    answer: "Brasil",
    partialanswer: ["Brasil"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador espanhol venceu o prêmio de melhor do mundo da FIFA em 2010?",
    answer: "Iker Casillas",
    partialanswer: ["Iker Casillas", "Casillas"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos do Campeonato Italiano?",
    answer: "Juventus",
    partialanswer: ["Juventus"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Didi'?",
    answer: "Waldyr Pereira",
    partialanswer: ["Waldyr Pereira", "Didi"],
  },

  {
    category: "futebol",
    question: "Qual jogador argentino é conhecido como 'El Kun'?",
    answer: "Sergio Agüero",
    partialanswer: ["Sergio Agüero", "Agüero"],
  },

  {
    category: "futebol",
    question: "Qual seleção venceu a Copa do Mundo de 2010?",
    answer: "Espanha",
    partialanswer: ["Espanha"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Copa do Brasil?",
    answer: "Cruzeiro",
    partialanswer: ["Cruzeiro"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Falcão'?",
    answer: "Paulo Roberto Falcão",
    partialanswer: ["Paulo Roberto Falcão", "Falcão"],
  },

  {
    category: "futebol",
    question: "Qual é o clube com mais títulos da Liga Europa da UEFA?",
    answer: "Sevilla",
    partialanswer: ["Sevilla"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador português venceu o prêmio de melhor do mundo da FIFA em 2019?",
    answer: "Cristiano Ronaldo",
    partialanswer: ["Cristiano Ronaldo", "Ronaldo"],
  },

  {
    category: "futebol",
    question: "Qual é o país com mais títulos da Copa América?",
    answer: "Uruguai",
    partialanswer: ["Uruguai"],
  },

  {
    category: "futebol",
    question:
      "Qual jogador italiano venceu o prêmio de melhor do mundo da FIFA em 2006?",
    answer: "Fabio Cannavaro",
    partialanswer: ["Fabio Cannavaro", "Cannavaro"],
  },

  {
    category: "futebol",
    question:
      "Qual é o clube com mais títulos da Eredivisie (Campeonato Holandês)?",
    answer: "Ajax",
    partialanswer: ["Ajax"],
  },

  {
    category: "futebol",
    question: "Qual jogador brasileiro é conhecido como 'Cafu'?",
    answer: "Marcos Evangelista de Morais",
    partialanswer: ["Marcos Evangelista de Morais", "Cafu"],
  },
];

import pkg from "pg";
const { Pool } = pkg;

import venom from "venom-bot";
const { create } = venom;

const dbConfig = {
  user: "postgres",
  password: "99411520",
  host: "localhost",
  port: 5432,
  database: "whatspdf",
};

const pool = new Pool(dbConfig);

// Função para verificar a conexão com o banco de dados
async function checkDatabaseConnection() {
  const client = await pool.connect();
  try {
    console.log("Conexão bem-sucedida ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Chamada da função para verificar a conexão
checkDatabaseConnection()
  .then(() => {
    console.log("Conexão bem-sucedida. Pronto para realizar consultas.");
  })
  .catch((error) => {
    console.error("Erro ao verificar a conexão com o banco de dados:", error);
  });

async function createPostgresTables() {
  const pool = await connectToPostgres();

  const query = `
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY,
        question TEXT NOT NULL,
        answer TEXT NOT NULL,
        partial_answer TEXT[]
      )
    `;

  const client = await pool.connect();

  try {
    await client.query(query);
    console.log("PostgreSQL tables created or already exist");
  } catch (error) {
    console.error("Error creating PostgreSQL tables:", error);
  } finally {
    client.release();
  }
}

createPostgresTables();

// Função para inserir as questões no banco de dados
async function insertQuestions() {
  const client = await pool.connect();
  try {
    for (const question of questions) {
      await client.query(
        "INSERT INTO questions (category, question, answer, partialanswer) VALUES ($1, $2, $3, $4)",
        [
          question.category,
          question.question,
          question.answer,
          question.partialanswer,
        ]
      );
    }
    console.log("Questões inseridas com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir questões:", error);
    throw error;
  } finally {
    client.release();
  }
}

// Chamada da função para inserir as questões
insertQuestions();

function cleanString(string) {
  //Remove os acentos
  const textoSemAcentos = string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  //Converte para caixa baixa
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
    state.winners[winnerName] += 3; //Incrementa 3 pontos para o vencedor existente
  } else {
    state.winners[winnerName] = 3; //Atribui 3 pontos para um novo vencedor
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
    state.isGameRunning = false; //Adicione essa linha para finalizar a trivia

    cleanStatus(client, state, message);
  }

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
    const dbClient = await pool.connect();
    try {
      const result = await dbClient.query(
        "SELECT * FROM questions ORDER BY RANDOM() LIMIT 6"
      );
      const selectedQuestions = result.rows;

      console.log("selectedQuestions", selectedQuestions);

      state.selectedQuestions = selectedQuestions;
      state.questions = selectedQuestions.map((q) => q.question);
      state.answers = selectedQuestions.map((q) => q.answer);

      state.fix_answers = selectedQuestions.map((q) => cleanString(q.answer));

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
      // state.isGameRunning = true;
      // checkTrivia(whatsappClient, state, message);
    } catch (error) {
      console.error("Erro ao iniciar o Triviardy:", error);
      throw error;
    } finally {
      dbClient.release();
    }
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

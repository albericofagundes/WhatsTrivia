// import questions from "./questions.json?v=1" assert { type: "json" };

// const _questions = [
//   {
//     question: "Qual é a capital da França?",
//     answer: "Paris",
//     partialAnswer: ["Paris"],
//   },
//   {
//     question: "Quantos elementos químicos existem na tabela periódica?",
//     answer: "118",
//     partialAnswer: ["118"],
//   },
//   {
//     question: "Quem escreveu o livro 'O Pequeno Príncipe'?",
//     answer: "Antoine de Saint-Exupéry",
//     partialAnswer:
//       "Antoine de Saint-Exupéry" , "Antoine" , "Saint-Exupéry" , "Exupéry",
//   },
//   {
//     question: "Quem pintou a Mona Lisa?",
//     answer: "Leonardo da Vinci",
//     partialAnswer: [
//       "Leonardo da Vinci" , "Leonardo" , "da Vinci" , "daVinci",
//     ],
//   },
//   {
//     question: "Qual é a montanha mais alta do mundo?",
//     answer: "Monte Everest",
//     partialAnswer: ["Monte Everest" , "Everest"],
//   },
//   {
//     question: "Qual é o país com a maior população do mundo?",
//     answer: "China",
//     partialAnswer: ["China"],
//   },
//   {
//     question: "Quem foi o primeiro presidente do Brasil?",
//     answer: "Deodoro da Fonseca",
//     partialAnswer: ["Deodoro da Fonseca" , "Deodoro"],
//   },
//   {
//     question: "Qual é o nome do cachorro do Mickey Mouse?",
//     answer: "Pluto",
//     partialAnswer: ["Pluto" , "pluto"],
//   },
//   {
//     question: "Quem foi o primeiro astronauta a pisar na lua?",
//     answer: "Neil Armstrong",
//     partialAnswer: ["Neil Armstrong" , "Armstrong"],
//   },
//   {
//     question: "Qual é o maior deserto do mundo?",
//     answer: "Deserto do Saara",
//     partialAnswer: ["Deserto do Saara" , "Saara"],
//   },

//   {
//     question: "Qual é o número atômico do carbono?",
//     answer: "6",
//     partialAnswer: ["6"],
//   },
//   {
//     question: "Quem escreveu a obra 'Dom Quixote'?",
//     answer: "Miguel de Cervantes",
//     partialAnswer: ["Miguel de Cervantes" , "Cervantes"],
//   },
//   {
//     question: "Quantos planetas fazem parte do sistema solar?",
//     answer: "8",
//     partialAnswer: ["8"],
//   },
//   {
//     question: "Quem pintou a obra 'A Última Ceia'?",
//     answer: "Leonardo da Vinci",
//     partialAnswer: [
//       "Leonardo da Vinci" , "Leonardo" , "da Vinci" , "daVinci",
//     ],
//   },
//   {
//     question: "Qual é o animal terrestre mais rápido do mundo?",
//     answer: "Guepardo",
//     partialAnswer: ["Guepardo" , "Chita"],
//   },
//   {
//     question: "Qual é o maior oceano do mundo?",
//     answer: "Oceano Pacífico",
//     partialAnswer: ["Oceano Pacífico" , "Pacífico"],
//   },
//   {
//     question: "Quem foi o inventor da lâmpada elétrica?",
//     answer: "Thomas Edison",
//     partialAnswer: ["Thomas Edison" , "Edison"],
//   },
//   {
//     question: "Qual é o símbolo químico do ouro?",
//     answer: "Au",
//     partialAnswer: ["Au"],
//   },
//   {
//     question:
//       "Quem foi o líder espiritual da Índia que lutou pela independência do país?",
//     answer: "Mahatma Gandhi" , "Gandhi",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Qual é o maior planeta do sistema solar?",
//     answer: "Júpiter",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Quantos ossos tem o corpo humano?",
//     answer: "206",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o fundador da Microsoft?",
//     answer: "Bill Gates" , "Gates",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é a capital da Rússia?",
//     answer: "Moscou",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o físico responsável pela Teoria da Relatividade?",
//     answer: "Albert Einstein" , "Einstein",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quantos estados têm os Estados Unidos da América?",
//     answer: "50",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem pintou a obra 'Guernica'?",
//     answer: "Pablo Picasso" , "Picasso",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior mamífero terrestre?",
//     answer: "Elefante africano" , "Elefante",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o nome do cientista que formulou a Teoria da Evolução das Espécies?",
//     answer: "Charles Darwin" , "Darwin",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior estado do Brasil em extensão territorial?",
//     answer: "Amazonas",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem escreveu a peça teatral 'Hamlet'?",
//     answer: "William Shakespeare" , "Shakespeare",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o símbolo químico do hidrogênio?",
//     answer: "H",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior felino do mundo?",
//     answer: "Tigre",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Quantos continentes existem?",
//     answer: "7",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o nome do processo de conversão de uma substância do estado sólido para o gasoso?",
//     answer: "Sublimação",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem pintou a obra 'A Noite Estrelada'?",
//     answer: "Vincent van Gogh" , "Van Gogh",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Quem foi o líder sul-africano que lutou contra o apartheid?",
//     answer: "Nelson Mandela" , "Mandela",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior rio do mundo?",
//     answer: "Rio Amazonas" , "Amazonas",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem escreveu a obra '1984'?",
//     answer: "George Orwell" , "Orwell",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o nome do cientista que formulou a Teoria da Relatividade?",
//     answer: "Albert Einstein" , "Einstein",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Qual é o maior produtor de café do mundo?",
//     answer: "Brasil",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question:
//       "Quem foi o líder pacifista e ativista dos direitos civis que lutou pela igualdade racial nos Estados Unidos?",
//     answer: "Martin Luther King Jr." , "Martin Luther King",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior órgão interno do corpo humano?",
//     answer: "Fígado",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o cientista que formulou a Teoria da Gravidade?",
//     answer: "Isaac Newton" , "Newton",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o número atômico do oxigênio?",
//     answer: "8",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem escreveu o livro 'Crime e Castigo'?",
//     answer: "Fiódor Dostoiévski" , "Dostoiévski",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quantos lados possui um heptágono?",
//     answer: "7",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior arquipélago do mundo?",
//     answer: "Indonésia",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem foi o líder político e militar responsável pela independência da Índia?",
//     answer: "Mahatma Gandhi" , "Gandhi",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o símbolo químico do sódio?",
//     answer: "Na",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem escreveu a obra 'A Odisséia'?",
//     answer: "Homero",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior órgão do sistema respiratório humano?",
//     answer: "Pulmões",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o pintor espanhol famoso por suas obras surrealistas?",
//     answer: "Salvador Dalí" , "Dalí",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quantos elementos fazem parte do horóscopo zodiacal?",
//     answer: "12",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior estado do Brasil em população?",
//     answer: "São Paulo",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem foi o líder militar e imperador francês que conquistou grande parte da Europa?",
//     answer: "Napoleão Bonaparte" , "Napoleão" , "Bonaparte",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o maior osso do corpo humano?",
//     answer: "Fêmur",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o filósofo grego considerado o pai da Filosofia?",
//     answer: "Sócrates",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é a cidade mais populosa do mundo?",
//     answer: "Tóquio",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem foi o escritor brasileiro autor do livro 'Grande Sertão: Veredas'?",
//     answer: "João Guimarães Rosa" , "Guimarães Rosa",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question:
//       "Qual é o país que detém o recorde de maior número de Copas do Mundo conquistadas?",
//     answer: "Brasil",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem foi o artilheiro da Copa do Mundo de 2018?",
//     answer: "Harry Kane" , "Kane",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o jogador com o maior número de gols marcados na história do futebol?",
//     answer: "Pelé" , "Edson Arantes do Nascimento",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o clube brasileiro com mais títulos da Copa Libertadores da América?",
//     answer: "Club Atlético Independiente" , "Independiente",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o jogador com mais Bolas de Ouro da FIFA?",
//     answer: "Lionel Messi" , "Messi",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual seleção venceu a Copa do Mundo de 2014?",
//     answer: "Alemanha",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem é o jogador brasileiro recordista em número de partidas pela seleção?",
//     answer: "Cafu" , "Marcos Evangelista de Morais",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o estádio com maior capacidade do mundo?",
//     answer: "Estádio Rungnado May Day" , "Estádio Primeiro de Maio",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o clube com mais títulos da Liga dos Campeões da UEFA?",
//     answer: "Real Madrid",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o país que sediou a Copa do Mundo de 2018?",
//     answer: "Rússia",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem é o técnico com mais títulos da Liga dos Campeões da UEFA?",
//     answer: "Zinedine Zidane" , "Zidane",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o jogador com mais títulos da Copa do Mundo?",
//     answer: "Pelé" , "Edson Arantes do Nascimento",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o clube brasileiro com mais títulos do Campeonato Brasileiro?",
//     answer: "São Paulo Futebol Clube" , "São Paulo",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem venceu o prêmio de Melhor Jogador do Mundo da FIFA em 2020?",
//     answer: "Robert Lewandowski" , "Lewandowski",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o jogador com mais gols marcados na história da Copa do Mundo?",
//     answer: "Marta" , "Marta Vieira da Silva",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o país que detém o recorde de maior número de títulos da Copa América?",
//     answer: "Uruguai",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem é o maior artilheiro da história do Campeonato Brasileiro?",
//     answer: "Roberto Dinamite" , "Dinamite",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o jogador com mais gols marcados em uma única edição da Copa do Mundo?",
//     answer: "Just Fontaine" , "Fontaine",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Qual é o clube com mais títulos do Campeonato Espanhol?",
//     answer: "Real Madrid" , "Barcelona",
//     partialAnswer: ["Saara"],
//   },

//   {
//     question: "Qual filme ganhou o Oscar de Melhor Filme em 2022?",
//     answer: "Duna" , "Dune",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question: "Quem dirigiu o filme 'A Origem'?",
//     answer: "Christopher Nolan",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o filme com a maior bilheteria de animação de todos os tempos?",
//     answer: "Frozen 2" , "Frozen II",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual ator interpretou o personagem Luke Skywalker na trilogia original de Star Wars?",
//     answer: "Mark Hamill",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o filme de Quentin Tarantino lançado em 1994 que se passa em Los Angeles e envolve diversas histórias interligadas?",
//     answer: "Pulp Fiction",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o filme da Disney que conta a história de um leão chamado Simba?",
//     answer: "O Rei Leão" , "The Lion King",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem interpretou o personagem Wolverine nos filmes da franquia X-Men?",
//     answer: "Hugh Jackman",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o filme de Steven Spielberg lançado em 1993 que se passa em uma ilha onde dinossauros foram recriados geneticamente?",
//     answer: "Jurassic Park",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Qual é o filme que conta a história de um jovem aspirante a músico chamado Miguel, que se aventura na Terra dos Mortos?",
//     answer: "Viva: A Vida é uma Festa" , "Coco",
//     partialAnswer: ["Saara"],
//   },
//   {
//     question:
//       "Quem interpretou o personagem Capitão Jack Sparrow na franquia 'Piratas do Caribe'?",
//     answer: "Johnny Depp",
//     partialAnswer: ["Saara"],
//   },
// ];

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
    question: "Qual é o filme com a maior bilheteria de todos os tempos?",
    answer: "Avatar",
    partialAnswer: ["Avatar"],
  },
  {
    question: "Quem ganhou o Oscar de Melhor Atriz em 2021?",
    answer: "Frances McDormand",
    partialAnswer: ["Frances McDormand", "McDormand"],
  },
  {
    question: "Qual é o diretor do filme 'The Shawshank Redemption'?",
    answer: "Frank Darabont",
    partialAnswer: ["Frank Darabont", "Darabont"],
  },
  {
    question:
      "Qual é o filme que conta a história de um naufrago em uma ilha deserta e é estrelado por Tom Hanks?",
    answer: "Cast Away",
    partialAnswer: ["Cast Away"],
  },
  {
    question: "Quem interpretou o Coringa no filme 'The Dark Knight'?",
    answer: "Heath Ledger",
    partialAnswer: ["Heath Ledger", "Ledger"],
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
  {
    question: "Quem é o cantor e compositor de 'Shape of You'?",
    answer: "Ed Sheeran",
    partialAnswer: ["Ed Sheeran", "Sheeran"],
  },
  {
    question: "Qual é o álbum mais vendido de todos os tempos?",
    answer: "Thriller",
    partialAnswer: ["Thriller"],
  },
  {
    question: "Quem é a cantora conhecida pela música 'Hello'?",
    answer: "Adele",
    partialAnswer: ["Adele"],
  },
  {
    question:
      "Qual é o nome da música que se tornou um hit na voz de Luis Fonsi e Daddy Yankee?",
    answer: "Despacito",
    partialAnswer: ["Despacito"],
  },
  {
    question: "Quem é o líder da banda U2?",
    answer: "Bono",
    partialAnswer: ["Bono"],
  },
  {
    question: "Qual é o cantor conhecido pela música 'Thinking Out Loud'?",
    answer: "Ed Sheeran",
    partialAnswer: ["Ed Sheeran", "Sheeran"],
  },
  {
    question:
      "Qual é a banda de rock formada pelos irmãos Noel e Liam Gallagher?",
    answer: "Oasis",
    partialAnswer: ["Oasis"],
  },
  {
    question: "Qual é a música mais famosa da banda Nirvana?",
    answer: "Smells Like Teen Spirit",
    partialAnswer: ["Smells Like Teen Spirit"],
  },
  {
    question: "Quem é a cantora conhecida pelo hit 'Wrecking Ball'?",
    answer: "Miley Cyrus",
    partialAnswer: ["Miley Cyrus", "Cyrus"],
  },
  {
    question: "Quem é o super-herói conhecido como o 'Homem de Ferro'?",
    answer: "Tony Stark",
    partialAnswer: ["Tony Stark", "Homem de Ferro"],
  },
  {
    question: "Qual é o nome do alter ego do Batman?",
    answer: "Bruce Wayne",
    partialAnswer: ["Bruce Wayne", "Batman"],
  },
  {
    question: "Quem é o arqui-inimigo do Homem-Aranha?",
    answer: "Duende Verde",
    partialAnswer: ["Duende Verde", "Duende", "Green Goblin"],
  },
  {
    question:
      "Qual é o nome da ilha fictícia onde se passam as histórias de 'Tintin'?",
    answer: "Sildávia",
    partialAnswer: ["Sildávia", "Syldavia"],
  },
  {
    question: "Quem é o alter ego do Flash?",
    answer: "Barry Allen",
    partialAnswer: ["Barry Allen", "Flash"],
  },
  {
    question:
      "Qual é o nome da heroína que é a princesa de Themyscira e conhecida como Mulher-Maravilha?",
    answer: "Diana Prince",
    partialAnswer: ["Diana Prince", "Mulher-Maravilha"],
  },
  {
    question:
      "Qual é o nome do jornalista e fotógrafo que trabalha no Clarim Diário e é amigo do Homem-Aranha?",
    answer: "Peter Parker",
    partialAnswer: ["Peter Parker", "Homem-Aranha"],
  },
  {
    question: "Quem é o vilão principal nas histórias do Super-Homem?",
    answer: "Lex Luthor",
    partialAnswer: ["Lex Luthor", "Luthor"],
  },
  {
    question: "Qual é o nome do detetive mascarado criado por Lee Falk?",
    answer: "Fantasma",
    partialAnswer: ["Fantasma", "The Phantom"],
  },
  {
    question: "Quem é o maior inimigo do Capitão América?",
    answer: "Caveira Vermelha",
    partialAnswer: ["Caveira Vermelha", "Red Skull"],
  },
  {
    question: "Qual é o nome da novela que retratou a vida de Escrava Isaura?",
    answer: "Escrava Isaura",
    partialAnswer: ["Escrava Isaura"],
  },
  {
    question:
      "Em qual novela o personagem 'Zé Pequeno' foi interpretado por Leandro Firmino?",
    answer: "Cidade de Deus",
    partialAnswer: ["Cidade de Deus"],
  },
  {
    question: "Qual foi o programa de humor estrelado por Chico Anysio?",
    answer: "Chico Anysio Show",
    partialAnswer: ["Chico Anysio Show"],
  },
  {
    question: "Qual é o nome da protagonista da novela 'Avenida Brasil'?",
    answer: "Rita/Nina",
    partialAnswer: ["Rita", "Nina", "Rita/Nina"],
  },
  {
    question:
      "Qual é o nome do programa dominical apresentado por Fausto Corrêa da Silva, mais conhecido como Faustão?",
    answer: "Domingão do Faustão",
    partialAnswer: ["Domingão do Faustão"],
  },
  {
    question:
      "Em qual novela a personagem 'Carminha' ficou marcada como a grande vilã?",
    answer: "Avenida Brasil",
    partialAnswer: ["Avenida Brasil", "Carminha"],
  },
  {
    question:
      "Qual é o nome da novela que retratou a história da fictícia cidade de Asa Branca?",
    answer: "Roque Santeiro",
    partialAnswer: ["Roque Santeiro", "Asa Branca"],
  },
  {
    question:
      "Qual é o nome da personagem interpretada por Susana Vieira na novela 'Por Amor'?",
    answer: "Helena",
    partialAnswer: ["Helena"],
  },
  {
    question:
      "Qual é o nome do programa de auditório apresentado por Silvio Santos?",
    answer: "Programa Silvio Santos",
    partialAnswer: ["Programa Silvio Santos"],
  },
  {
    question:
      "Em qual novela o personagem 'Santinho' foi interpretado por Ney Latorraca?",
    answer: "Cambalacho",
    partialAnswer: ["Cambalacho", "Santinho"],
  },
  {
    question:
      "Qual é o nome do programa de variedades apresentado por Xuxa Meneghel?",
    answer: "Xou da Xuxa",
    partialAnswer: ["Xou da Xuxa", "Xuxa"],
  },
  {
    question:
      "Qual é o nome da novela que se passa na fictícia cidade de Passaperto?",
    answer: "Tieta",
    partialAnswer: ["Tieta", "Passaperto"],
  },

  {
    question: "Qual é o maior oceano do mundo?",
    answer: "Oceano Pacífico",
    partialAnswer: ["Oceano Pacífico", "Pacífico"],
  },
  {
    question: "Qual é o maior país em extensão territorial?",
    answer: "Rússia",
    partialAnswer: ["Rússia"],
  },
  {
    question: "Qual é a capital do Brasil?",
    answer: "Brasília",
    partialAnswer: ["Brasília"],
  },
  {
    question: "Qual é o rio mais extenso do mundo?",
    answer: "Rio Amazonas",
    partialAnswer: ["Rio Amazonas", "Amazonas"],
  },
  {
    question: "Em qual continente está localizado o Egito?",
    answer: "África",
    partialAnswer: ["África"],
  },
  {
    question: "Qual é o ponto mais alto da Terra?",
    answer: "Monte Everest",
    partialAnswer: ["Monte Everest", "Everest"],
  },
  {
    question: "Qual é o país mais populoso do mundo?",
    answer: "China",
    partialAnswer: ["China"],
  },
  {
    question: "Em qual país está localizada a Torre Eiffel?",
    answer: "França",
    partialAnswer: ["França"],
  },
  {
    question: "Qual é o maior deserto do mundo?",
    answer: "Deserto do Saara",
    partialAnswer: ["Deserto do Saara", "Saara"],
  },
  {
    question: "Qual é o país com o maior número de ilhas no mundo?",
    answer: "Suécia",
    partialAnswer: ["Suécia"],
  },
  {
    question: "Em qual país está localizada a cidade de Machu Picchu?",
    answer: "Peru",
    partialAnswer: ["Peru"],
  },
  {
    question: "Qual é o país com a maior área de floresta tropical?",
    answer: "Brasil",
    partialAnswer: ["Brasil"],
  },

  {
    question: "Em que ano ocorreu a queda do Império Romano do Ocidente?",
    answer: "476",
    partialAnswer: ["476"],
  },
  {
    question: "Quem foi o líder da Revolução Russa em 1917?",
    answer: "Vladimir Lênin",
    partialAnswer: ["Vladimir Lênin", "Lênin"],
  },
  {
    question: "Qual foi o imperador romano que legalizou o cristianismo?",
    answer: "Constantino",
    partialAnswer: ["Constantino"],
  },
  {
    question: "Qual foi o período conhecido como Idade das Trevas?",
    answer: "Idade Média",
    partialAnswer: ["Idade Média"],
  },
  {
    question: "Em que ano ocorreu a Revolução Francesa?",
    answer: "1789",
    partialAnswer: ["1789"],
  },
  {
    question: "Quem foi o líder sul-africano que lutou contra o apartheid?",
    answer: "Nelson Mandela",
    partialAnswer: ["Nelson Mandela", "Mandela"],
  },
  {
    question: "Qual foi a civilização que construiu as pirâmides de Gizé?",
    answer: "Egípcios",
    partialAnswer: ["Egípcios"],
  },
  {
    question: "Qual foi a primeira guerra mundial?",
    answer: "Primeira Guerra Mundial",
    partialAnswer: ["Primeira Guerra Mundial"],
  },
  {
    question:
      "Quem foi o líder político que conduziu a independência da Índia?",
    answer: "Mahatma Gandhi",
    partialAnswer: ["Mahatma Gandhi", "Gandhi"],
  },
  {
    question: "Qual foi o imperador romano que ficou conhecido como 'O Louco'?",
    answer: "Nero",
    partialAnswer: ["Nero"],
  },
  {
    question: "Em que ano ocorreu a Queda do Muro de Berlim?",
    answer: "1989",
    partialAnswer: ["1989"],
  },
  {
    question:
      "Quem foi o líder militar francês durante as Guerras Napoleônicas?",
    answer: "Napoleão Bonaparte",
    partialAnswer: ["Napoleão Bonaparte", "Napoleão"],
  },

  {
    question: "Qual é o nome do protagonista de 'Naruto'?",
    answer: "Naruto Uzumaki",
    partialAnswer: ["Naruto Uzumaki", "Naruto"],
  },
  {
    question:
      "Em qual série de anime/mangá os personagens usam o poder do 'ki'?",
    answer: "Dragon Ball",
    partialAnswer: ["Dragon Ball"],
  },
  {
    question: "Qual é o nome do criador do mangá 'One Piece'?",
    answer: "Eiichiro Oda",
    partialAnswer: ["Eiichiro Oda", "Oda"],
  },
  {
    question: "Qual é o nome do protagonista de 'Attack on Titan'?",
    answer: "Eren Yeager",
    partialAnswer: ["Eren Yeager", "Eren"],
  },
  {
    question:
      "Em qual anime/mangá os personagens jogam o jogo 'Duel Monsters'?",
    answer: "Yu-Gi-Oh!",
    partialAnswer: ["Yu-Gi-Oh!"],
  },
  {
    question: "Qual é o nome do protagonista de 'One Piece'?",
    answer: "Monkey D. Luffy",
    partialAnswer: ["Monkey D. Luffy", "Luffy"],
  },
  {
    question:
      "Em qual série de anime/mangá os personagens se tornam piratas espaciais?",
    answer: "One Piece",
    partialAnswer: ["One Piece"],
  },
  {
    question: "Qual é o nome do protagonista de 'Death Note'?",
    answer: "Light Yagami",
    partialAnswer: ["Light Yagami", "Light"],
  },
  {
    question:
      "Qual é o nome do mangá que deu origem ao anime 'Fullmetal Alchemist'?",
    answer: "Fullmetal Alchemist",
    partialAnswer: ["Fullmetal Alchemist"],
  },
  {
    question: "Qual é o nome do protagonista de 'Bleach'?",
    answer: "Ichigo Kurosaki",
    partialAnswer: ["Ichigo Kurosaki", "Ichigo"],
  },
  {
    question: "Em qual anime/mangá os personagens caçam demônios?",
    answer: "Demon Slayer",
    partialAnswer: ["Demon Slayer"],
  },
  {
    question: "Qual é o nome do protagonista de 'My Hero Academia'?",
    answer: "Izuku Midoriya",
    partialAnswer: ["Izuku Midoriya", "Deku"],
  },

  {
    question:
      "Qual é o nome do encanador protagonista da série de jogos 'Super Mario'?",
    answer: "Mario",
    partialAnswer: ["Mario"],
  },
  {
    question: "Qual é o nome do mascote da SEGA?",
    answer: "Sonic",
    partialAnswer: ["Sonic"],
  },
  {
    question:
      "Qual é o nome do jogo de RPG desenvolvido pela Bethesda ambientado em um mundo pós-apocalíptico?",
    answer: "Fallout",
    partialAnswer: ["Fallout"],
  },
  {
    question:
      "Qual é o nome da série de jogos de ação/aventura protagonizada por Link?",
    answer: "The Legend of Zelda",
    partialAnswer: ["The Legend of Zelda", "Zelda"],
  },
  {
    question:
      "Em qual jogo o jogador controla um personagem chamado Kratos, que busca vingança contra os deuses gregos?",
    answer: "God of War",
    partialAnswer: ["God of War"],
  },
  {
    question:
      "Qual é o nome do jogo de estratégia em tempo real desenvolvido pela Blizzard que se passa no universo de ficção científica?",
    answer: "StarCraft",
    partialAnswer: ["StarCraft"],
  },
  {
    question:
      "Qual é o nome do jogo de simulação de vida no qual o jogador cria e controla uma família virtual?",
    answer: "The Sims",
    partialAnswer: ["The Sims"],
  },
  {
    question:
      "Qual é o nome do jogo de tiro em primeira pessoa que se passa durante a Segunda Guerra Mundial?",
    answer: "Call of Duty",
    partialAnswer: ["Call of Duty"],
  },
  {
    question:
      "Em qual jogo de luta o personagem principal se chama Ryu e possui um golpe especial chamado 'Hadouken'?",
    answer: "Street Fighter",
    partialAnswer: ["Street Fighter"],
  },
  {
    question:
      "Qual é o nome do jogo online massivo que se passa em um mundo de fantasia com criaturas como orcs e elfos?",
    answer: "World of Warcraft",
    partialAnswer: ["World of Warcraft", "WoW"],
  },
  {
    question:
      "Qual é o nome do jogo de plataforma em que o personagem principal é um ouriço azul?",
    answer: "Sonic the Hedgehog",
    partialAnswer: ["Sonic the Hedgehog", "Sonic"],
  },
  {
    question:
      "Em qual jogo o jogador assume o papel de um caçador de monstros em um mundo repleto de criaturas fantásticas?",
    answer: "Monster Hunter",
    partialAnswer: ["Monster Hunter"],
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

async function sendQuestions(client, state, message) {
  await sleep(1212); // Delay de x segundos antes de mostrar a próxima pergunta
  let question = state.questions[state.currentIndex];
  await client.sendText(message.from, `${question}`);

  // console.log(state.questions[state.currentIndex]);
  // console.log(state.answers[state.currentIndex]);
}

async function startTriviardy(client, state, message) {
  state.selectedQuestions = shuffle(questions).slice(0, 6);
  state.questions = state.selectedQuestions.map((q) => q.question);
  state.answers = state.selectedQuestions.map((q) => q.answer);

  state.fix_answers = state.selectedQuestions.map((q) => cleanString(q.answer));

  // state.answers = state.selectedQuestions
  // .filter((q) => q.answers) // Filtra apenas as perguntas que possuem respostas
  // .flatMap((q) => q.answers.map((answer) => cleanString(answer)));

  // state.answers = state.selectedQuestions.flatMap((q) =>
  //   q.answers.map((answer) => cleanString(answer))
  // );

  // state.answers = state.selectedQuestions.flatMap((q) =>
  //   q.answers ? q.answers.map((answer) => cleanString(answer)) : []
  // );

  console.log("state.questions", state.questions, "indice", state.currentIndex);
  console.log("state.answers", state.answers, "indice", state.currentIndex);
  console.log(
    "state.fix_answers",
    state.fix_answers,
    "indice",
    state.currentIndex
  );
  // console.log("state.partialAnswers ", state.partialAnswers);

  await client.sendText(message.from, `Trivia iniciado`);
  state.isGameRunning = true;
  sendQuestions(client, state, message);
}

const correctAnswerPromise = new Promise((resolve) => {
  // Simule a obtenção da resposta correta
  setTimeout(() => {
    resolve("Resposta correta");
  }, 30000);
});

// Aguardar resposta correta ou tempo expirado
const answerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Tempo expirado");
  }, 20000);
});

Promise.race([answerPromise, correctAnswerPromise])
  .then((result) => {
    console.log("result", result);
    if (result === "Resposta correta") {
      // A pessoa acertou a resposta dentro do tempo
      console.log("Parabéns! Você acertou!");
    } else {
      // O tempo expirou
      console.log("Tempo expirado. Tente novamente.");
    }
  })
  .catch((error) => {
    console.log(error);
  });

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
  };

  // console.log("function start(client isGameRunning", isGameRunning);
  // console.log("function start(client) state.answer", state.answers);
  // console.log("function start(client) state.question", state.questions);

  // function increment() {
  //   state.currentIndex++;
  //   console.log("increment");
  // }

  // async function processAnswer(client, message) {}

  client.onAnyMessage(async (message) => {
    let msg_body = cleanString(message.body);
    // console.log("onAnyMessage isGameRunning", state.isGameRunning);
    // console.log("message", message.body);
    // console.log("state.currentIndex", state.currentIndex);

    if (message.body == "!endtrivia") {
      state.isGameRunning = false;
      console.log("agora terminou");
      await client.sendText(message.from, `Trivia interrompido`);
    }

    if (message.body == "!trivia" && state.isGameRunning === true) {
      await client.sendText(
        message.from,
        `Trivia já inicializado, aguarde finalizar`
      );
    }

    if (message.body === "!trivia" && state.isGameRunning === false) {
      startTriviardy(client, state, message);

      // state.partialAnswers = state.selectedQuestions.map((q) =>
      //   cleanString(q.partialAnswer)
      // );
    }

    if (
      msg_body === state.fix_answers[state.currentIndex] &&
      state.isGameRunning === true
    ) {
      const winnerName = message.sender.pushname;
      // await client.sendText(
      //   message.from,
      //   `Parabéns, ${winnerName}! Você acertou!`
      // );
      await client.sendText(
        message.from,
        `A resposta é:\n${
          state.answers[state.currentIndex]
        }!\nParabéns, ${winnerName}! Você acertou!`
      );

      updateWinner(state, winnerName);

      // await client.sendText(message.from, `acertou`);

      state.currentIndex++;
      await sleep(1212); // Delay de 3 segundos antes de mostrar a próxima pergunta

      sendQuestions(client, state, message);

      // console.log("state.currentIndex", state.currentIndex);
      // console.log("state.questions", state.questions[state.currentIndex]);
      // console.log("state.answers", state.answers[state.currentIndex]);
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

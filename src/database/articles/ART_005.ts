import article, { articleCover } from "@/types/articles";

export const ART_005_Header: articleCover = {
  id: "ART_005",
  title: "O Mundo dos Videogames",
  description:
    "Os videogames são uma parte fundamental das indústrias de entretenimento no mundo, pois além de ser a indústria de entretenimento que mais move dinheiro também é um hobby amado por milhares de pessoas ao redor do mundo, sendo muito importante para economias e também gerando diversos empregos.",
  author: {
    id: "AUT_02",
    name: "Leonardo Nantes",
  },
  date: "15/10/2023",
};

const ART_005: article = {
  ...ART_005_Header,
  topics: [
    {
      text: [
        `Mas isso tudo ainda é muito recente e só foi possível se tornar o que é hoje devido ao imenso avanço tecnológico dos últimos anos, o primeiro jogo de videogame a ser lançado é o "tennis for two" que não está no ar a nem um século já que foi lançado em 1958, o primeiro console doméstico foi o Odyssey e pertence ao mesmo ano do primeiro fliperama, ambos pertencendo a 1972.`,
        `Os videogames são um hobby muito amado por fornecer altas emoções a quem joga e isso começou a se popularizar na década de 80 com o grande avanço do fliperama e isso também se deve por ele ser muito acessível, nessa época já existiam grandes videogames domésticos como o Atari e o Nintendinho que marcaram gerações, nessa época surgia uma das maiores empresas de jogos: a Nintendo. Também foi nessa época que surgiram grandes jogos como Pac Man, Tetris e Super Mario.`,
        `O tempo passou e chegou a década de 90 que teve grandes videogames como o Playstation 1 e o Nintendo 64, começando uma rivalidade histórica entre Sony e Nintendo que existe até os dias de hoje, nessa época também que se popularizaram as lan houses que nada mais era um lugar em que tinham vários videogames disponíveis para serem alugados e jogados na hora, nessa época também que lançou o jogo que permaneceu mais tempo no auge e revolucionou tudo por ser online: o Counter strike.`,
      ],
      image: "nintendo.jpg",
    },
    {
      text: [
        `Chegando nos anos 2000 a Microsoft também lançou seu próprio videogame o Xbox 360 que marcou muitas infâncias ao lado do videogame mais popular e mais vendido da história o Playstation 2.`,
        `A tecnologia seguiu evoluindo e a internet tornou-se mais popular até que chegamos na atualidade onde as principais empresas de videogame são a Sony com o Playstation, a Microsoft com o XBOX e a Nintendo, porém o meio mais utilizado para jogar atualmente são os computadores já que possibilitam uso tanto para entretenimento quanto para trabalho, também vale menção para jogos de celular que são uma boa opção por serem bem portáteis e práticos.`,
      ],
      image: "lanhouse.jpg",
    },
    {
      text: [
        `Mas como funciona o desenvolvimento dos jogos e toda a programação por trás? Isso depende muito do jogo e da quantidade de recursos e detalhes que este possui,  podendo ser muito complicado ou bem simples desenvolver um jogo, um bom exemplo de jogo simples é o próprio Tetris já que é um jogo casual sem muitos detalhes, porém tem muitos jogos complicadas como o próprio Grand Theft Auto 5 mais conhecido como GTA 5 que teve que ter uma grande atenção a muitos detalhes como os gráficos que são muito bem feitos e trabalhosos, o roteiro, os sons do jogo e aí vai, podendo demorar muitos anos para ser feito um jogo mesmo que tenha uma grande empresa por trás, também sendo um processo muito caro. Mas a tecnologia sempre tenta facilitar a vida de quem a utiliza, sendo cada vez mais fácil produzir um jogo, o avanço tecnológico também permite cada vez jogos mais realistas e com mais detalhes e histórias mais longas, existindo jogos que a história passa de 100 horas e demora muito para zerá-lo.`,
        `Porém os jogos que mais movimentam capital e são mais populares são os jogos online ou multijogador, esses jogos tendem a ser mais populares devido a oferecer mais emoções e você também pode jogar com seus amigos o que pode melhorar em muita a experiência, daí que surgiram os eSports que são torneios destes jogos, e, apesar de ser caro manter um servidor online, eles acabam gerando muito dinheiro e alegrando muito o público.`,
      ],
    },
  ],
};

export default ART_005;

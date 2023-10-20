import article, { articleCover } from "@/types/articles";

export const ART_008_Header: articleCover = {
  id: "ART_008",
  title: "Engines do Xadrez",
  description: "Entenda as máquinas poderosas que são os engines de xadrez.",
  author: {
    id: "AUT_02",
    name: "Leonardo Nantes",
  },
  date: "15/10/2023",
};

const ART_008: article = {
  ...ART_008_Header,
  topics: [
    {
      text: [
        `O xadrez é um dos jogos mais antigos do mundo, sendo criado por volta de 200 a.c. e mesmo com o passar do tempo ainda é muito popular com um grande número de jogadores e fãs que acompanham e se interessam pelo jogo, porém nos últimos anos, ou, sendo mais específico no século XXI o xadrez sofreu uma grande alteração que o ajudou a ficar ainda mais popular, a digitalização do jogo, que só foi possível com o avanço da internet e da tecnologia, possibilitando ao xadrez ser jogado por qualquer pessoa do mundo com acesso à internet.`,
        `Porém, o avanço tecnológico também beneficiou outra área do xadrez, a jogabilidade e a forma como se joga, antes mesmo da digitalização do xadrez já existiam "máquinas" ou também chamados de programas de computador, que calculavam as melhores formas de jogar e apesar que naquela época qualquer um poderia ganhar delas o tempo foi passando e nos dias atuais nem os melhores jogadores do mundo conseguem derrotar as máquinas ,ou em outras palavras, as engines. Uma curiosidade interessante é um marco para as engines em que uma engine derrotou o indiscutivelmente melhor do mundo da época Garry Kasparov, a engine que conquistou isso foi DeepBlue e aconteceu em 1997, conseguindo três empates e duas vitórias em cima do campeão do mundo fazendo-o perder umas das partidas em apenas 19 lances.`,
      ],
      image: "deepblue.jpg",
    },
    {
      text: [
        `Mas aí vem aquela questão: como elas funcionam?`,
        `É um pouco mais simples do que parece, já que a parte mais difícil é ensinar para as engines como jogar de forma correta o jogo, já que com essa parte feita as engines mais atuais conseguem testar inúmeras jogadas em segundos até achar o melhor lance daquela situação.`,
        `Contudo, até mesmo as engines mais atuais com tecnologia de ponta não conseguem fazer uma partida "perfeita" porque o jogo de xadrez tem bilhões de formas de que pode ser jogado e para as engines demorariam anos até encontrarem a melhor forma de seguir uma partida, e isso é demonstrado pois após a partida as engines podem avaliar com mais facilidade a partida e percebem imprecisões e lances desnecessários que elas próprias fizeram.`,
        `Atualmente existem campeonatos em que apenas engines competem umas com as outras para descobrir a melhor e mais confiável do momento.`,
        `A melhor engine do mercado atualmente é o stockfish e isso se deve ao fato de que qualquer pessoa pode ajudar em seu desenvolvimento e melhora, porém essa engine tem um grande rival: o Alphazero. Este, por sua vez, pertence a uma empresa conhecida como DeepMind que é focada em inteligências artificiais e obteve uma grande melhora após jogar contra si mesma milhares de vezes, surpreendendo o mundo.`,
        `As engines ajudam demais diversos jogadores e é uma ótima ferramenta para treino, já que sua precisão pode ser alterada de modo a dificultar e treinar os usuários, as engines também podem ser utilizadas para avaliar as partidas e ajudar a melhorar a experiência de todos, assim sendo um recurso muito legal e importante que a tecnologia permite existir.`,
      ],
    },
  ],
};

export default ART_008;

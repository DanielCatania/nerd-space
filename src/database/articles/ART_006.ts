import article, { articleCover } from "@/types/articles";

export const ART_006_Header: articleCover = {
  id: "ART_006",
  title: "Tecnologia nos esportes",
  description:
    "Na atualidade já temos muitos exemplos de como a tecnologia interfere nos esportes, alterando a experiência tanto de quem assiste quanto de quem pratica, também possibilitando a criação de novos esportes que citaremos mais a frente, mas agora iremos mostrar como a tecnologia altera o mundo dos esportes.",
  author: {
    id: "AUT_02",
    name: "Leonardo Nantes",
  },
  date: "11/10/2023",
};

const ART_006: article = {
  ...ART_006_Header,
  topics: [
    {
      title: "Preparamento físico",
      text: [
        `Antigamente era muito complicado dos atletas possuírem um bom preparamento físico pela falta de tecnologia e de recursos, porém com o seu avanço diversos equipamentos puderam ser criados para monitorar e ajudar no preparamento dos atletas, e também com o avanço da medicina a recuperação de quem acaba se lesionando se torna muita mais rápida, e antigamente em alguns casos em que a lesão era muito grave muitos atletas tinham que desistir de suas carreiras e buscar por outros caminhos, mas na atualidade o avanço tecnológico faz com que isso não seja mais necessário.`,
      ],
      image: "preparamento-fisico.jpg",
    },
    {
      title: "Arbitragem",
      text: [
        `Os métodos de arbitragem também mudaram com o avanço tecnológico, pois antigamente tudo estava nas mãos dos árbitros e caso ocorresse algum imprevisto e ele não conseguisse ver um lance, suas decisões poderiam acabar alterando o rumo da partida, e com o tempo foram surgindo ferramentas para ajudá-los na hora de apitar uma partida, temos como um dos principais exemplos a ajuda do VAR ou, em outras palavras, o árbitro de vídeo que consegue rever os lances para ajudar na decisão do juiz em campo, a tecnologia também ajuda a diminuir o número de fraudes que podem ocorrer, assim deixando competições muito mais justas.`,
      ],
      image: "var.jpg",
    },
    {
      title: "Torcida",
      text: [
        `A tecnologia também afeta na experiência dos espectadores pois antigamente torcedores que queriam acompanhar seu time seja no basquete ou em qualquer outro esporte, tinham que fazê-lo por meio de rádios, mas com o decorrer do tempo passaram a existir televisões e até redes sociais que permitem um maior acompanhamento dos torcedores a cada vez mais distância e de maneira mais prática. Porém isso não se limita só pra quem acompanha a distância, já que quem acompanha presencialmente também ganhou benefícios com o avanço da tecnologia, pois vem sendo implementadas tecnologias para melhorar o acompanhamento de pessoas que comparecem a partidas.`,
      ],
      image: "torcida.jpg",
    },
    {
      title: "Transportes",
      text: [
        `Outro grande benefício da tecnologia e o avanço da velocidade de meios de transporte pois se torna cada vez mais rápido e fácil viajar para longas distâncias, e isso interfere em muito nos esportes possibilitando ocorrerem mais partidas em diferentes lugares num intervalo de tempo menor, também ajudando a melhorar a qualidade das experiências de quem deseja comparecer a um estádio ou quadra e facilitando esse processo.`,
      ],
    },
    {
      title: "eSports",
      text: [
        `Os eSports são o mais novo tipo de modalidade esportiva e só é possível devido a um tremendo avanço da tecnologia pois demanda muitos recursos nem um pouco comuns em outros esportes, por serem basicamente competições de videogame, e essa modalidade vem se expandindo cada vez mais e se tornando mais comum devido a variedade de jogos de videogame e de um público muito fiel que acompanha e participa desses eventos.`,
      ],
      image: "esports.jpg",
    },
    {
      title: "Modernização",
      text: [
        `A tecnologia também permite que os esportes tenham equipamentos cada vez com mais qualidade, e permite cada vez competições mais equilibradas e justas melhorando a qualidade de quadras e estádios, além de proporcionar mais segurança para todos.`,
      ],
    },
  ],
};

export default ART_006;

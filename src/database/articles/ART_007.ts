import article, { articleCover } from "@/types/articles";

export const ART_007_Header: articleCover = {
  id: "ART_007",
  title: "Conversa sobre IAs",
  description:
    "Bate-papo sobre inteligencia artificial com Daniel Catania. O que são? E quais são suas vantagens? ",
  author: {
    id: "AUT_02",
    name: "Leonardo Nantes",
  },
  date: "20/10/2023",
};

const ART_007: article = {
  ...ART_007_Header,
  topics: [
    {
      text: [
        `De acordo com o especialista em tecnologia Daniel Catania as inteligências artificiais vieram para facilitar as nossas vidas, já que elas basicamente são computadores programados para tentar pensar como seres humanos e tentar realizar tarefas que seriam maçantes para uma pessoa normal, e essa ideia já vem sendo discutida há séculos, "alguém que faça coisas que eu não gosto e facilite minha vida" a solução são as IAs, e elas funcionam porque alguém concedeu a ela milhares de informações que ela processa e comprime para nós apenas vermos tudo de forma muito simplificada e não muito computacional.`,
      ],
      image: "ia.jpg",
    },
    {
      text: [
        `A opinião pessoal do especialista é que elas são extremamente úteis para sociedade apesar de não terem alcançado seu auge, e concede a quem sabe utilizá-la de forma correta uma vantagem sobre quem não sabe, as aspas dele são "A IA ainda tem que ser explorada mas ainda sim é algo muito bom" `,
        `Agora sobre os possíveis problemas que a IA traz a sociedade o especialista disse que não há nada realmente sério se comparada com os benefícios, porém, sim, existem problemas, como ela é uma ferramenta extremamente poderosa se usada de forma errada pode trazer diversos problemas, também há o risco a privacidade pois ela sempre está coletando informações para se desenvolver, mas não, não existe o risco de ocorrer uma revolução das máquinas.`,
        `A opinião final de Daniel Catania é que elas são um grande marco para sociedade, e facilitam nossas vidas.`,
      ],
    },
  ],
};

export default ART_007;

import article, { articleCover } from "@/types/articles";

export const ART_003_Header: articleCover = {
  id: "ART_003",
  title: "A lógica por detrás de um programa",
  description:
    "Como funciona a lógica por detrás de um simples programa? Como estruturar e pensar na hora do desenvolvimento de um programa.",
  author: {
    id: "AUT_01",
    name: "Daniel Catania",
  },
  date: "27/09/2023",
};

const ART_003: article = {
  ...ART_003_Header,
  topics: [
    {
      text: [
        `Neste artigo, tentaremos demonstrar como funciona a lógica por detrás de um simples programa. Como estruturar e pensar na hora do desenvolvimento de um programa.`,
        `Usaremos como exemplo uma calculadora trigonométrica, ela calcula o seno, cosseno e a tangente. Focaremos na parte lógica, então o restante da estrutura e as tecnologias em si não serão explicadas.`,
        `Pensando na parte matemática, o seno é a relação entre o cateto oposto e a hipotenusa, o cosseno é a relação entre o cateto adjacente e a hipotenusa, a tangente é a relação entre o cateto oposto e o cateto adjacente. Logo você precisa dos três lados para realizar todos os cálculos, porém, pelo Teorema de Pitágoras atrás de dois lados conseguimos calcular o terceiro. Então, nosso programa deverá aceitar no mínimo 2 lados.`,
        `O Teorema de Pitágoras afirma que a soma dos catetos ao quadrado é igual a hipotenusa ao quadrado. Logo, a hipotenusa tem que ser maior que os outros dois. Nosso programa também deverá verificar se a hipotenusa está calculada de forma certa.`,
      ],
    },
    {
      text: [
        `Vamos organizar estas informações:`,
        `1. Quais lados foram preenchidos?`,
        `2. Quantos campos foram preenchidos?`,
        ` 3. Mais de dois lados foram preenchidos? Sim: Continua Não: Emitir erro`,
        `- Todos os lados foram preenchidos?`,
        `- Sim: A hipotenusa é maior que os catetos?`,
        `- Sim: A hipotenusa está calculada corretamente?`,
        `- Sim:  Calcular os resultados Não: Emite erro`,
      ],
      image: "code-01.jpeg",
    },
    {
      text: [
        `Agora precisamos supor a situação de não ter sido informado a hipotenusa. É extremamente fácil de solucionar, basta usar o Teorema de Pitágoras para obter a hipotenusa.`,
        `1. Calcular a hipotenusa: oposto² + adjacente² `,
        `2. Informar a hipotenusa`,
        `3. Calcular os resultados`,
      ],
      image: "code-02.jpeg",
    },
    {
      text: [
        `Agora, assumindo a última situação, temos a hipotenusa e um cateto. Devemos fazer os cálculos referentes ao cateto faltante.`,
        `1. Calcular o cateto: hipotenusa² - cateto²`,
        `2. Informar o cateto`,
        `3. Calcular os resultados`,
      ],
      image: "code-03.jpeg",
      link: {
        url: "https://codepen.io/DanielCatania/pen/JjwLEqv?editors=0010",
        text: "Veja o resultado e o código em maior detalhes",
      },
    },
  ],
};

export default ART_003;

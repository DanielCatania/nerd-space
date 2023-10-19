import article, { articleCover } from "@/types/articles";

export const ART_004_Header: articleCover = {
  id: "ART_004",
  title: "O impacto da internet no mundo atual",
  description:
    "É inegável dizer que a internet causou um impacto estrondoso a todas as áreas com a sua chegada. Alterando tudo e qualquer coisa conectando literalmente todos os cantos do planeta.",
  author: {
    id: "AUT_02",
    name: "Leonardo Nantes",
  },
  date: "19/10/2023",
};

const ART_004: article = {
  ...ART_004_Header,
  topics: [
    {
      title: "O mundo antes da internet",
      text: [
        `Antes da internet era muito mais difícil falar com seus parentes e a troca de mensagens não existia, porém um pouco antes da internet virar um dos focos mundiais existiam os telefones que na época eram recursos caros e só disponíveis para a mais alta classe, e antes dos telefones o mundo se conectava por meio de cartas, sendo milhares de vezes mais lento do que é nos dias de hoje.`,
      ],
    },
    {
      title: "Internet e economia, como se relacionam?",
      text: [
        `Desde a chegada da internet ela vem gerando cada vez mais empregos e oportunidades para começar a ganhar dinheiro, a internet também possibilitou o famoso home office que nada mais é que o trabalho remoto. A internet também foi essencial na pandemia para  transmissão de notícias e podermos nos conectar com outras pessoas.`,
        `Mas grande parte do marketing atualmente é pela internet por possuir um grande número de usuários.`,
      ],
    },
    {
      title:
        "Mas como isso altera as nossas vidas e a forma como nós nos entretemos?",
      text: [
        `Bom, apesar de essa ser uma pergunta deveras desnecessária ela ainda é muito importante para demonstrar o quão grande foi esse impacto, já que no nosso dia a dia a internet simplesmente já está praticamente integrada a tudo, um bom exemplo disso é quando você decide assistir a um filme, antigamente seria necessário ir até uma locadora para alugar o filme, para quando chegar em casa ter que possuir um aparelho que reconhece o DVD e só então ser capaz de assistir ao filme, enquanto isso, atualmente basta possuir uma Smart Tv (uma televisão que vem com acesso a internet) e internet para poder assistir a diversos filmes, vale constar que é quase impossível achar uma locadora nos dias atuais pelo fato da internet ter tomado o seu lugar. A internet simplesmente deixou o entretenimento ser algo muito mais prático, simples e acessível para todos.`,
      ],
      image: "game.jpg",
    },
    {
      title: "Indústrias de entretenimento e a modernização",
      text: [
        `A progressão da internet também afeta demais a economia e as indústrias de entretenimento, pois estas indústrias têm que se adaptar a todo momento à modernização, alterando de forma significativa o mercado, a indústria cinematográfica é um grande exemplo pois até 5 anos atrás era preferível ir até a um cinema assitir filmes, mas atualmente as indústrias cinematográficas estão tendo que se adaptar aos canais de assinatura para poder satisfazer a todo o seu público.`,
        `E o que falar dos videogames, já que são atualmente um dos polos de entretenimento mais afetados pelo avanço da internet e estão em constante evolução, também exigindo internets cada vez mais rápidas e eficazes para suprir toda sua necessidade.`,
      ],
    },
    {
      title: "Conexão do mundo",
      text: [
        `A internet também possibilitou conectar todos os pontos do mundo em segundos, com a velocidade absurda em que ela consegue atravessar o globo pode possibilitar pessoas do ocidente conversarem em tempo real com pessoas no oriente, o que é um negócio incrível já pessoas que estam distante ao mesmo tempo estão incrivelmente próximas.`,
      ],
      image: "globo.jpg",
    },
    {
      title: "Ensino na internet",
      text: [
        `A internet além de todo o resto também melhorou o ensino, pois um professor que mora no Norte no Brasil pode ensinar um aluno do Sul, possibilitando a melhora do ensino em tudo e qualquer canto, a tecnologia e a internet também foi implementada nas escolas melhorando em consequência a eficácia das aulas.`,
      ],
    },
    {
      title: "Redes Sociais",
      text: [
        `Isso é um assunto delicado, pois já houveram diversos problemas em relação a isso, porém se usadas da forma correta só sobram benefícios, porque transmitem notícias de forma rápida e eficaz e podem alertar a população de problemas, além de que também conseguem entreter as pessoas e deixar umas mais próximas das outras.`,
      ],
      image: "redes-sociais.jpg",
    },
    {
      title: "Usar com sabedoria",
      text: [
        `Mas também é muito importante usá-la de forma correta, porque podem trazer diversos problemas podendo levar até ao suicídio, também se deve evitar assistir vídeos ilícitos pois podem chegar a fazer mal a saúde, nas redes sociais é importante ter empatia ao próximo e o respeitar como você respeitaria alguém pessoalmente, já que pode acabar fazendo um mal desnecessário que se não fosse em forma virtual não seria cometido.`,
      ],
    },
    {
      title: "Quer saber como tudo isso funciona?",
      text: [],
      link: {
        text: "Veja a matéria completa sobre isso",
        url: "/articles/ART_001",
      },
    },
  ],
};

export default ART_004;

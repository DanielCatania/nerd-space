import article, { articleCover } from "@/types/articles";

export const ART_001_Header: articleCover = {
  id: "ART_001",
  title: "Como funciona por debaixo do seu telefone?",
  description:
    "Você já parou para pensar como funciona por baixo do seu telefone? Como funciona quando você envia uma mensagem, usa as redes sociais ou faz uma pesquisa no Google? Como tudo isso funciona? ",
  date: "14/09/2023",
  author: {
    name: "Daniel Catania",
    id: "AUT_01",
  },
};

const ART_001: article = {
  ...ART_001_Header,
  topics: [
    {
      title: "Como funciona debaixo do seu telefone?",
      image: "internet-path.png",
      text: [
        `Você já parou para pensar como funciona por baixo do seu telefone? Como funciona quando você envia uma mensagem, usa as redes sociais ou faz uma pesquisa no Google? Isso é o que tentaremos responder durante o artigo: o que seu celular realmente envia e recebe, qual o caminho que a internet percorre e qual a magia por trás do que você vê na sua tela.`,
        `Vamos criar uma situação hipotética: você abre seu navegador, acessa o link https://nerd-space.vercel.app e vê uma página maravilhosa carregando com diversos artigos. Como isso ocorre? Ao colocar o link no seu navegador, ele envia uma requisição ao DNS, Domain Name System, ou em português, Sistema de Nomes de Domínio, que vai procurar o domínio do Nerd Space e retornar qual servidor ele está localizado. Ao ter em mãos o endereço IP do servidor, será requisitada uma versão do site. Que, por sua vez, o servidor vai fazer uma cópia dos arquivos do site, sendo esses arquivos em HTML, CSS e JavaScript. Com esses arquivos, o navegador os compila e mostra na sua tela o deslumbrante site do Nerd Space.`,
      ],
    },
    {
      title: "O que é o endereço IP?",
      text: [
        `O endereço IP é um identificador que qualquer máquina na rede precisa ter. Existem duas versões: o IPv4, que é um sistema numérico de 32 bits, e o IPv6, que é uma sequência de 128 bits, podendo conter números de 0 a 9, letras de A a F e separado com dois pontos a cada 4 dígitos. `,
        `Exemplo de IPv4: 01.102.103.104. \n Exemplo de IPv6: 2001:db8:3333:4444:5555:6666:7777:8888`,
        `Essas métricas são determinadas no protocolo TCP/IP, que é uma fusão de dois protocolos: o TCP, Transmission Control Protocol, ou em português, Protocolo de Controle de Transmissão, criado por Bob Kahn para solucionar o problema do antigo NCP, Network Control Protocol, ou em português, Protocolo de Controle de Rede, que não permitia fazer duas conexões ao mesmo tempo; e do protocolo IP, Internet Protocol, ou em português, Protocolo Internet, criado por Vint Cerf, justamente para identificar as máquinas. Antes da sua criação, o protocolo TCP tinha dificuldades em identificação quando ocorriam múltiplas conexões.`,
      ],
    },
    {
      title: "As tecnologias que compõem o site:",
      text: [
        `Os arquivos HTML, CSS e JavaScript são os que compõem o site, sendo responsáveis ​​por estruturar, estilizar e dar funcionalidade à aplicação. O HTML, HyperText Markup Language, ou em português, Linguagem de Marcação de Hipertexto, é o responsável pela estrutura do site. O CSS, Cascading Style Sheet, ou em português, Folhas de Estilo em Cascata, é o responsável pela estilização do site. O JavaScript, que curiosamente tem esse nome inspirado em Java por conta da popularização na época, usando como jogada de marketing, mas não existe relação real entre as linguagens, é a única linguagem de programação da aplicação e é responsável por dar funcionalidade ao site. Estas são as tecnologias base do Front-end, ou do client-side, são aquelas que são compiladas pelo navegador.`,
      ],
    },
    {
      text: [
        `O HTML não é uma linguagem de programação, mas sim uma linguagem de marcação, pertencendo à mesma família do XML e do SVG. Sua principal função é estruturar a página, definindo, ou melhor, marcando, elementos como cabeçalhos, parágrafos, títulos, links, listas, etc. Essa marcação ocorre por meio de tags, etiquetas, que são abertas e fechadas com o conteúdo entre elas, por exemplo, a tag para definir parágrafos é <p>, e a tag para títulos principais é <h1>:`,
      ],
      image: "code-html.png",
      link: {
        url: "https://codepen.io/DanielCatania/pen/OJrWZGb",
        text: "Resultado do exemplo",
      },
    },
    {
      text: [
        `O CSS tem a função de controlar a aparência e apresentação de uma página. Ele é responsável por definir as cores, tamanhos, espaçamentos, fontes, animações, transições e etc. O termo “folhas em cascata” refere-se à maneira como o CSS lida com várias regras de estilo sobrepostas uma em cima da outra, onde se soma as regras escritas em um arquivo, ou folha, a regras escritas em outro arquivo. O CSS funciona através de definir propriedades nos elementos selecionados. Por exemplo, você quer aumentar o tamanho do texto e mudar a cor para azul do HTML acima:`,
      ],
      image: "code-css.png",
      link: {
        url: "https://codepen.io/DanielCatania/pen/WNLRJqZ",
        text: "Resultado do exemplo",
      },
    },
    {
      text: [
        `O JavaScript é uma linguagem de programação orientada a objetos que é principalmente executada no lado do cliente. Ele é responsável por fornecer funcionalidades para uma aplicação, como verificação de formulários, interações com campos e botões, manipulação de cookies, animações, manipulação do HTML e do CSS, conexões com APIs e etc. Como qualquer linguagem de programação, o JavaScript inclui variáveis, funções, classes, objetos, listas, etc. Em JavaScript, as variáveis podem ser declaradas usando 'let', o que permite que seus valores sejam alterados, ou 'const', que mantém o valor constante. As funções em JavaScript são definidas com a estrutura 'function nome(){ }'.`,
      ],
      image: "code-javascript.png",
      link: {
        url: "https://codepen.io/DanielCatania/pen/YzdNvzy",
        text: "Resultado do exemplo",
      },
    },
    {
      text: [
        `Concluindo, seu telefone inicia o processo fazendo uma solicitação ao DNS, que retorna o IP, uma identificação do servidor. Com o IP, ele faz uma solicitação ao servidor, que retorna o site com os arquivos em HTML para a estrutura, CSS para o estilo e o JS para dar funcionalidade.`,
      ],
    },
  ],
};

export default ART_001;

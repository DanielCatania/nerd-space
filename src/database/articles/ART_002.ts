import article, { articleCover } from "@/types/articles";

export const ART_002_Header: articleCover = {
  id: "ART_002",
  title: "Como se manter seguro na internet?",
  description:
    "Com o crescimento do mundo digital, especialmente no que se refere aos dados sensíveis e aos bancos digitais, a segurança digital se torna um assunto de extrema importância.",
  author: {
    id: "AUT_01",
    name: "Daniel Catania",
  },
  date: "21/09/2023",
};

const ART_002: article = {
  ...ART_002_Header,
  topics: [
    {
      title: "Como se manter seguro na internet?",
      image: "code.jpg",
      text: [
        `Com o crescimento do mundo digital, especialmente no que se refere aos dados sensíveis e aos bancos digitais, a segurança digital se torna um assunto de extrema importância.`,
        `Com a crescente da internet, a partir da década de 90, bilhões de pessoas utilizam a internet. A partir disso surgiu o comércio online, a comunicação pela web, as redes sociais, o estudo EAD, o trabalho home office, os bancos digitais e outras várias coisas. Agora todas as informações estão na web, seus relacionamentos, suas fotos, seus documentos, sua empresa, seu trabalho, sua faculdade. Você está na web. Sua vida está ligada a web. É praticamente impossível viver sem internet. Você está lendo este artigo pela internet.`,
        `Com os vírus, malwares, hackers, phishings, e várias outras ameaças, você tem que estar sempre alerta e prevenido. Esteja sempre desconfiado e cuidadoso enquanto está na internet.`,
      ],
    },
    {
      title: "Dicas:",
      text: [
        `- Crie senhas fortes:`,
        `Crie senhas complexas, de preferência com letras maiúsculas, minúsculas, números e caracteres especiais.  `,
        `Senhas longas também funcionam muito bem, são difíceis de corromper e fáceis de lembrar. Como por exemplo, seu suco favorito, comida favorita, nome dos seus filhos, entre outras coisas. “Sucodelaranja01?” é um ótimo exemplo: longa, com diversos tipos de caracteres e fácil de lembrar por não ser uma sequência aleatória.`,
        `- Ative a verificação em dois fatores (2FA):`,
        `A verificação em dois fatores (2FA) é uma camada extra de proteção depois da senha. Protegendo as vezes com uma segunda senha ou mandando uma mensagem para seu telefone ou mandando um e-mail, etc.`,
        `- Mantenha seus sistemas atualizados`,
        `Manter o sistema atualizado é sempre uma boa prática. Em cada nova atualização eles aperfeiçoam o sistema de segurança e o atualizam para novas ameaças.`,
        `- Tenha cuidado com phishing:`,
        `Sempre esteja atento à procedência dos links, emails e mensagens que você abre. Sempre esteja atento a onde você fornece suas informações pessoais e principalmente financeiras. Nunca abra nada suspeito e nunca forneça seus dados em qualquer lugar.`,
        `- Faça backup`,
        `Faça backup, na nuvem ou em dispositivos externos, para não perder os seus dados em caso de ataques cibernéticos.`,
        `- Use um antivírus`,
        `Use um antivírus confiável para evitar seu dispositivo de vírus e malwares.`,
      ],
      image: "security.jpg",
    },
    {
      text: [
        `A internet hoje detém uma grande importância com diversas funções essenciais e consequentemente um grande número de informações frágeis. Por isso você deve sempre se manter atento e atualizado sobre como se proteger. Coisas simples já fazem uma grande diferença, use senhas fortes, 2FA, antivírus e principalmente prudência e atenção.`,
      ],
    },
  ],
};

export default ART_002;

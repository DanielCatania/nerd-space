import { articleCover } from "@/types/articles";
import { ART_001_Header } from "./articles/ART_001";

const articleList: articleCover[] = [
  {
    id: "ART_002",
    title: "Como se manter seguro na internet?",
    description:
      "Com o crescimento do mundo digital, especialmente no que se refere aos dados sensíveis e aos bancos digitais, a segurança digital se torna um assunto de extrema importância.",
    date: "17/09/2023",
    author: {
      name: "Daniel Catania",
      id: "AUT_01",
    },
  },
  ART_001_Header,
];

export default articleList;

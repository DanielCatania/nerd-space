import type { NextApiRequest, NextApiResponse } from "next";
import { articleCover } from "@/types/articles";

const data: articleCover[] = [
  {
    id: "ART_001",
    title: "Como funciona por debaixo do seu telefone?",
    description:
      "Você já parou para pensar como funciona por baixo do seu telefone? Como funciona quando você envia uma mensagem, usa as redes sociais ou faz uma pesquisa no Google? Como tudo isso funciona? ",
    date: "14/09/2023",
    author: {
      name: "Daniel Catania",
      id: "AUT_01",
    },
  },
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
];

export type ResponseArticlesList = {
  message: string;
  status: number;
  articles: articleCover[];
};

export default function handlerArticlesList(
  req: NextApiRequest,
  res: NextApiResponse<ResponseArticlesList>
) {
  try {
    const status = 200;
    res.status(status).json({
      status,
      message: "List of articles received successfully",
      articles: data,
    });
  } catch (error) {
    const status = 400;
    res.status(status).json({
      status,
      message: JSON.stringify(error),
      articles: [],
    });
  }
}

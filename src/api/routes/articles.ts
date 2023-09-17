import type { NextApiRequest, NextApiResponse } from "next";
import articleType from "@/types/articles";
import articles from "../database/articles";

export type ResponseArticle = {
  message: string;
  status: number;
  article: articleType | {};
};

export default function handlerArticle(
  req: NextApiRequest,
  res: NextApiResponse<ResponseArticle>
) {
  try {
    const id = req.query?.id;
    const article = articles.find((articleTested) => articleTested.id === id);

    if (!article) throw new Error("404");

    const status = 200;
    res
      .status(status)
      .json({ article, status, message: "article found successfully" });
  } catch (error) {
    const status = 404;
    res.status(status).json({
      status,
      message: JSON.stringify(error),
      article: {},
    });
  }
}

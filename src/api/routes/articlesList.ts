import type { NextApiRequest, NextApiResponse } from "next";
import { articleCover } from "@/types/articles";
import articleList from "../database/articlesList";

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
      articles: articleList,
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

import { ResponseArticle } from "@/api/routes/articles";
import React from "react";

export default function ArticleScreen(props: ResponseArticle) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

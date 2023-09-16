import React from "react";
import { ResponseArticlesList } from "@/pages/api/articlesList";
import { ArticleCover } from "./components/ArticleCover";
import HomeScreenMain, { Articles } from "./style";

export interface HomeScreenProps {
  data: ResponseArticlesList;
}

export default function HomeScreen({ data }: HomeScreenProps) {
  const { articles } = data;

  return (
    <HomeScreenMain>
      <Articles>
        {articles.map((article) => (
          <ArticleCover key={article.id} {...article} />
        ))}
      </Articles>
    </HomeScreenMain>
  );
}

import React from "react";
import { ArticleCover } from "./components/ArticleCover";
import HomeScreenMain, { Articles } from "./style";
import { articleCover } from "@/types/articles";

export interface HomeScreenProps {
  articles: articleCover[];
}

export default function HomeScreen({ articles }: HomeScreenProps) {
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

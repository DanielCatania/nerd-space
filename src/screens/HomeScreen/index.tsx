import React from "react";

import { articleCover } from "@/types/articles";

import Main, { Articles } from "./style";

import { ArticleCover } from "./components/ArticleCover";
import Highlihted from "./components/Highlighted";
import Title from "./components/Title";

export interface HomeProps {
  articles: articleCover[];
  highlighted: articleCover;
}

export default function HomeScreen({ articles, highlighted }: HomeProps) {
  return (
    <Main>
      <Title>Destaque</Title>
      <Highlihted {...highlighted} />
      <Title>Últimos artigos</Title>
      <Articles>
        {articles.map((article) => (
          <ArticleCover key={article.id} {...article} />
        ))}
      </Articles>
    </Main>
  );
}

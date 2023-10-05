import React from "react";

import { articleCover } from "@/types/articles";

import Main from "./style";

import { ArticleCover } from "../../components/ArticleCover";
import Highlihted from "./components/Highlighted";
import Title from "../../components/Title";
import ArticlesGrid from "@/components/ArticlesGrid";

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
      <ArticlesGrid>
        {articles.map((article) => (
          <ArticleCover key={article.id} {...article} />
        ))}
      </ArticlesGrid>
    </Main>
  );
}

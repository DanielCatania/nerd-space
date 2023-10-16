import React from "react";

import article, { articleCover } from "@/types/articles";

import Author from "@/components/Author";
import {
  Main,
  Content,
  Cover,
  CoverImage,
  CoverInfo,
  Image,
  Text,
  Link,
  ReadToo,
} from "./style";
import Title from "@/components/Title";
import { ArticleCover } from "@/components/ArticleCover";
import ArticlesGrid from "@/components/ArticlesGrid";
import useLocalStorage from "@/hooks/useLocalStorage";

export interface ArticleProps {
  article: article;
  readToo: articleCover[] | [];
}

export default function ArticleScreen({ article, readToo }: ArticleProps) {
  const { id, title, author, date, topics } = article;
  const [access, setAccess] = useLocalStorage("access", "false");

  return (
    <Main>
      <pre>{JSON.stringify({ access }, null, 2)}</pre>
      <button onClick={() => setAccess(access === "false" ? "true" : "false")}>
        change
      </button>
      <article>
        <Cover>
          <CoverImage src={`/img/articles/${id}/cover.jpg`} alt={title} />
          <Text as="h1" size="xl">
            {title}
          </Text>
          <CoverInfo>
            <Author {...author} />
            <Text size="s">{date}</Text>
          </CoverInfo>
          <hr />
        </Cover>
        <Content>
          {topics.map(({ text, image, title, link }, i) => (
            <div key={i}>
              {!title ? null : (
                <Text as="h3" size="l">
                  {title}
                </Text>
              )}
              {text.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
              {!image ? null : (
                <Image src={`/img/articles/${id}/${image}`} alt={title} />
              )}
              {!link ? null : (
                <Link href={link.url} target="_blank">
                  {link.text}
                </Link>
              )}
            </div>
          ))}
        </Content>
      </article>
      <ReadToo>
        <Title>Leia também</Title>
        <ArticlesGrid>
          {readToo.map((article, i) => (
            <ArticleCover key={i} {...article} />
          ))}
        </ArticlesGrid>
      </ReadToo>
    </Main>
  );
}

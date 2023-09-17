import React from "react";
import { useRouter } from "next/router";

import article from "@/types/articles";

import Author from "@/components/Author";
import {
  Main,
  Content,
  Cover,
  CoverImage,
  CoverInfo,
  Image,
  Text,
} from "./style";

interface ArticleScreenProps {
  article: article;
}

export default function ArticleScreen({ article }: ArticleScreenProps) {
  const { id, title, author, date, topics } = article;

  const router = useRouter();
  if (id === "404") {
    router.push("/404");
  }

  return (
    <Main>
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
          {topics.map(({ text, image, title }, i) => (
            <div key={i}>
              {!title ? null : <Text size="l">{title}</Text>}
              {text.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
              {!image ? null : (
                <Image src={`/img/articles/${id}/${image}`} alt={title} />
              )}
            </div>
          ))}
        </Content>
      </article>
    </Main>
  );
}

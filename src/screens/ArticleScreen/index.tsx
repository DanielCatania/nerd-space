import React from "react";
import { useRouter } from "next/router";

import article from "@/types/articles";

import Text from "@/components/Text";
import Author from "@/components/Author";

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
    <main>
      <article>
        <header>
          <img src={`/img/articles/${id}/cover.jpg`} alt={title} />
          <Text as="h1" size="xl">
            {title}
          </Text>
          <Author {...author} />
          <Text size="s">{date}</Text>
        </header>
        <main>
          {topics.map(({ text, image, title }, i) => (
            <div key={i}>
              {!title ? null : <Text size="l">{title}</Text>}
              {text.map((paragraph) => (
                <Text key={paragraph}>{paragraph}</Text>
              ))}
              {!image ? null : (
                <img src={`/img/articles/${id}/${image}`} alt={title} />
              )}
            </div>
          ))}
        </main>
      </article>
    </main>
  );
}

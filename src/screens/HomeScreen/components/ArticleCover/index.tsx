import React from "react";
import { articleCover } from "@/types/articles";
import Text from "@/components/Text";
import Author from "@/components/Author";
import ArticleBox, { ArticleFooter, ArticleImage } from "./style";
import Link from "next/link";

export function ArticleCover({
  id,
  title,
  description,
  author,
  date,
}: articleCover) {
  return (
    <Link href={`/articles/${id}`}>
      <ArticleBox>
        <ArticleImage src={`/img/articles/${id}/cover.jpg`} alt={title} />
        <Text size="l" as="h2">
          {title}
        </Text>
        <Text as="p">{description}</Text>
        <ArticleFooter>
          <Author {...author} />
          <Text size="s">{date}</Text>
        </ArticleFooter>
      </ArticleBox>
    </Link>
  );
}

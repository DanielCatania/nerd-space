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
  SignatureBanner,
  Sign,
} from "./style";
import Title from "@/components/Title";
import { ArticleCover } from "@/components/ArticleCover";
import ArticlesGrid from "@/components/ArticlesGrid";
import useLocalStorage from "@/hooks/useLocalStorage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface ArticleProps {
  article: article;
  readToo: articleCover[] | [];
}

export default function ArticleScreen({ article, readToo }: ArticleProps) {
  const { id, title, author, date, topics } = article;
  const [access, setAccess] = useLocalStorage("access", "false");

  return (
    <>
      <Header />
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
            {access === "true" ? (
              topics.map(({ text, image, title, link }, i) => (
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
              ))
            ) : (
              <>
                <div>
                  {!topics[0].title ? null : (
                    <Text as="h3" size="l">
                      {title}
                    </Text>
                  )}
                  {topics[0].text.map((paragraph) => (
                    <Text key={paragraph}>{paragraph}</Text>
                  ))}
                  {!topics[0].image ? null : (
                    <Image
                      src={`/img/articles/${id}/${topics[0].image}`}
                      alt={topics[0].title}
                    />
                  )}
                  {!topics[0].link ? null : (
                    <Link href={topics[0].link.url} target="_blank">
                      {topics[0].link.text}
                    </Link>
                  )}
                </div>
                <SignatureBanner>
                  <Title>Assine agora para ler!</Title>
                  <Text size="l">R$9.90 p/mês</Text>
                  <Sign
                    onClick={() =>
                      setAccess(access === "false" ? "true" : "false")
                    }
                  >
                    <Text size="xl">Iniciar teste grátis!</Text>
                  </Sign>
                </SignatureBanner>
              </>
            )}
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
      <Footer />
    </>
  );
}

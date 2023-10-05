export { default } from "@/screens/ArticleScreen";
import type { GetServerSidePropsContext } from "next";

import database from "@/database";
import article, { articleCover } from "@/types/articles";
import { ArticleProps } from "@/screens/ArticleScreen";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    const data = JSON.parse(database);

    const { articles } = data;
    const id = ctx.params?.id;

    const article = articles.find(
      (articleTested: article) => articleTested.id === id
    );

    if (!article) throw new Error("404");

    const articleList: articleCover[] = data.articleList;
    const readToo: articleCover[] = [];
    for (let i = 0; readToo.length < 2; i++) {
      articleList[i].id !== id ? readToo.push(articleList[i]) : null;
    }

    const props: ArticleProps = {
      article,
      readToo,
    };

    return { props };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}

export { default } from "@/screens/ArticleScreen";
import type { GetServerSidePropsContext } from "next";

import database from "@/database";
import article from "@/types/articles";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    const { articles } = JSON.parse(database);
    const id = ctx.params?.id;

    const article = articles.find(
      (articleTested: article) => articleTested.id === id
    );

    if (!article) throw new Error("404");

    return { props: { article } };
  } catch {
    return {
      props: {
        article: {
          id: "404",
        },
      },
    };
  }
}

export { default } from "@/screens/ArticleScreen";
import type { GetServerSidePropsContext } from "next";

import articles from "@/database/articles";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    const id = ctx.params?.id;

    const article = articles.find((articleTested) => articleTested.id === id);

    if (!article) throw new Error("404");

    return { props: { article } };
  } catch {
    return { props: { article: {} } };
  }
}

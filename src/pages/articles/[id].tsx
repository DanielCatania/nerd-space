export { default } from "@/screens/ArticleScreen";
import type { GetServerSidePropsContext } from "next";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const id = ctx.params?.id;

  const res = await fetch(`${process.env["URL_API"]}/api/articles/${id}`);
  const data = await res.json();

  return { props: { data } };
}

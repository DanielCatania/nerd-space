export { default } from "@/screens/HomeScreen/";

import articleList from "@/database/articlesList";

export async function getServerSideProps() {
  return { props: { articles: articleList } };
}

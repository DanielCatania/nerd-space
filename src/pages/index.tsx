export { default } from "@/screens/HomeScreen/";
import { HomeProps } from "@/screens/HomeScreen/";

import database from "@/database";

export async function getServerSideProps() {
  const articles = database.articleList;
  const highlighted = articles.shift() || articles[0];

  const props: HomeProps = {
    articles,
    highlighted,
  };

  return { props };
}

export { default } from "@/screens/HomeScreen/";
import { HomeProps } from "@/screens/HomeScreen/";

import database from "@/database";

export async function getServerSideProps() {
  const data = JSON.parse(database);

  const highlighted = data.articleList[0];
  const articles = data.articleList.splice(1);

  const props: HomeProps = {
    articles,
    highlighted,
  };

  return { props };
}

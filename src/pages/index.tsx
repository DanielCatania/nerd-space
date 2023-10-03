export { default } from "@/screens/HomeScreen/";
import { HomeProps } from "@/screens/HomeScreen/";

import database from "@/database";

export async function getServerSideProps() {
  const highlighted = database.articleList[0];
  const articles = database.articleList.splice(1);

  console.log(highlighted, articles);

  const props: HomeProps = {
    articles,
    highlighted,
  };

  return { props };
}

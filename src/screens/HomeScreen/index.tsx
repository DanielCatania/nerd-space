import Text from "@/components/Text";
import { ResponseArticlesList } from "@/pages/api/articlesList";
import React from "react";

export interface HomeScreenProps {
  data: ResponseArticlesList;
}

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <>
      <Text as="h1" size="xl">
        Últimas notícias
      </Text>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  );
}

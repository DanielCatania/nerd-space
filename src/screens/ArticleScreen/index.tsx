import React from "react";
import article from "@/types/articles";

interface ArticleScreenProps {
  article: article | {};
}

export default function ArticleScreen(props: ArticleScreenProps) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

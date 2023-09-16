import React from "react";
import Text from "../Text";

import AuthorBox, { AuthorImage } from "./style";
import { Author } from "@/types/articles";

export default function Author({ id, name }: Author) {
  return (
    <AuthorBox>
      <AuthorImage src={`/img/authors/${id}.jpg`} alt={name} />
      <Text size="s">{name}</Text>
    </AuthorBox>
  );
}

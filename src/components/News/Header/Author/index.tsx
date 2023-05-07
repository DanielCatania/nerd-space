import React from "react";
import Texts from "@/components/patterns/Text";
import AuthorStyle, { AuthorImageStyle } from "./style";

import { author } from "../../type";

export default function Author({ image, name }: author) {
  return (
    <AuthorStyle>
      <AuthorImageStyle src={image} alt={name} />
      <Texts.Small>{name}</Texts.Small>
    </AuthorStyle>
  );
}

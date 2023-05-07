import React from "react";
import TitleStyle from "./style";
import { ExtraLarge } from "@/components/patterns/Text";

interface ITitle {
  content: string;
}

export default function Title({ content }: ITitle) {
  return (
    <TitleStyle>
      <ExtraLarge as="h1">{content}</ExtraLarge>
    </TitleStyle>
  );
}

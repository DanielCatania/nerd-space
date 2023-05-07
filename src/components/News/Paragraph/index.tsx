import React from "react";
import { Text } from "@/components/patterns/Text";
import ParagraphStyle from "./style";

interface IParagraph {
  children: React.ReactNode;
}

export default function Paragraph({ children }: IParagraph) {
  return (
    <ParagraphStyle>
      <Text as="span">{children}</Text>
    </ParagraphStyle>
  );
}

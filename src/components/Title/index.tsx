import React from "react";
import Text from "@/components/Text";

import Line from "./styled";

interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <Text size="xl" as="h2">
      {children} <Line />
    </Text>
  );
}

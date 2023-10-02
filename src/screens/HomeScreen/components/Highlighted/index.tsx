import React from "react";
import Link from "next/link";

import Box, { Image, Content, Footer } from "./style";
import Text from "@/components/Text";
import Author from "@/components/Author";

import { articleCover } from "@/types/articles";

export default function Highlihted({
  id,
  title,
  description,
  author,
  date,
}: articleCover) {
  return (
    <Link href={`/articles/${id}`}>
      <Box>
        <Image src={`/img/articles/${id}/cover.jpg`} alt={title} />
        <Content>
          <Text size="l" as="h3">
            {title}
          </Text>
          <Text>{description}</Text>
          <Footer>
            <Author {...author} />
            <Text>{date}</Text>
          </Footer>
        </Content>
      </Box>
    </Link>
  );
}

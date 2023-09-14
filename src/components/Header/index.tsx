import React from "react";
import Link from "next/link";
import Box from "./style";
import Text from "../Text";

export default function Header() {
  return (
    <Box>
      <Link href="/">
        <Text as="h1">NS | Nerd Space</Text>
      </Link>
    </Box>
  );
}

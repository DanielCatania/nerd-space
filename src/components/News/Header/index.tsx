import React from "react";
import Texts from "@/components/patterns/Text";

import Cover from "./Cover/";
import Title from "./Title/";

import HeaderStyle, { InfoStyle, AuthorsStyle, BarStyle } from "./style";

import Data from "../type";
import Author from "./Author";

export default function Header(props: Data) {
  return (
    <HeaderStyle>
      <Title content={props.title} />
      <Cover src={props.coverImage.src} alt={props.coverImage.alt} />
      <InfoStyle>
        <Texts.Default>{props.date}</Texts.Default>
        <AuthorsStyle>
          {props.authors.map((author, i) => (
            <li key={i}>
              <Author {...author} />
            </li>
          ))}
        </AuthorsStyle>
      </InfoStyle>
      <BarStyle />
    </HeaderStyle>
  );
}

import React from "react";
import Texts from "../patterns/Text";
import Paragraph from "./Paragraph";
import NewsStyle from "./style";
import Data from "./type";
import Header from "./Header";

export default function News(props: Data) {
  return (
    <NewsStyle>
      <Header {...props} />
      <main>
        {props.introduction.map((paragraph, i) => (
          <Paragraph key={i}>{paragraph}</Paragraph>
        ))}
        {props.topics.map((topic, i) => (
          <div key={i}>
            <Texts.Large>{topic.title}</Texts.Large>
            {topic.text.map((paragraph, i) => (
              <Paragraph key={i}>{paragraph}</Paragraph>
            ))}
            {topic.image ? (
              <picture>
                <img src={topic.image} alt={topic.title} />
              </picture>
            ) : (
              <></>
            )}
          </div>
        ))}
      </main>
    </NewsStyle>
  );
}

import styled from "styled-components";

const NewsStyle = styled.article`
  width: 75%;
  margin: 0 auto;

  picture {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    margin-bottom: 0.5em;

    img {
      max-width: 100%;
    }
  }
`;

export default NewsStyle;

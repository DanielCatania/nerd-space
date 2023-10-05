import styled from "styled-components";

const ArticlesGrid = styled.div`
  display: grid;
  gap: 3%;
  width: 100%;

  @media screen and (min-width: 0px) {
    grid-template-columns: 100%;
  }

  @media screen and (min-width: 744px) {
    grid-template-columns: repeat(2, calc(50% - (3% / 2)));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, calc(33% - (3% / 3)));
  }
`;

export default ArticlesGrid;

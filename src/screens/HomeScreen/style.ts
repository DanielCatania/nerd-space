import styled from "styled-components";

const Main = styled.main`
  margin: 0 5%;
  display: flex;
  justify-content: center;

  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
`;

export const Articles = styled.div`
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

export default Main;

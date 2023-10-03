import styled from "styled-components";

const Box = styled.article`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;

  width: 100%;
  height: calc(100vh - 132px - 2em - (55px + 1em));

  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid #ccc;

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 300px 200px;
    height: 500px;
  }
`;

export const Content = styled.div`
  padding: 1em 0.5em;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.radius};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export default Box;

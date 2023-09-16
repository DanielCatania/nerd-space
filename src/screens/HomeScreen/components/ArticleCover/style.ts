import styled from "styled-components";

const ArticleBox = styled.article`
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid #ccc;
  padding: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5em;
`;

export const ArticleImage = styled.img`
  max-height: 200px;
  max-width: 100%;

  border-radius: ${({ theme }) => theme.radius};
`;

export const ArticleFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ArticleBox;

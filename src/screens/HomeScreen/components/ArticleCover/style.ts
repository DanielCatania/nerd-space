import styled from "styled-components";

const ArticleBox = styled.article`
  border-radius: ${({ theme }) => theme.radius};
  border: 2px solid #ccc;
  padding: 5%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 500px;
`;

export const ArticleImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.radius};
`;

export const ArticleFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ArticleBox;

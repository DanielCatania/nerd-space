import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;
`;

export const InfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const AuthorsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;

  max-width: 280px;
`;

export const BarStyle = styled.span`
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.dark};
`;

export default HeaderStyle;

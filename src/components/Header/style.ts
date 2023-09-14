import styled from "styled-components";

const HeaderBox = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap");

  h1 {
    font-family: "Orbitron", monospace;
    font-weight: 700;
    font-size: 64px;

    border-right: 2px solid ${({ theme }) => theme.colors.neutral.light};

    white-space: nowrap;
    overflow: hidden;

    animation: blink-cursor 1s 7 1s both, writing 5s steps(15) 1s both;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin-bottom: 2em;

  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.neutral.light};

  @keyframes blink-cursor {
    from {
      border-right-color: ${({ theme }) => theme.colors.neutral.light};
    }
    to {
      border-right-color: transparent;
    }
  }

  @keyframes writing {
    0% {
      width: 0;
    }
    50% {
      width: 610px;
    }
    100% {
      width: 110px;
    }
  }

  @keyframes writing-medium {
    0% {
      width: 0;
    }
    50% {
      width: 460px;
    }
    100% {
      width: 85px;
    }
  }
  @keyframes writing-small {
    0% {
      width: 0;
    }
    50% {
      width: 300px;
    }
    100% {
      width: 60px;
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 48px;
      animation-name: blink-cursor, writing-medium;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 32px;
      animation-name: blink-cursor, writing-small;
    }
  }
`;

export default HeaderBox;

import { styled } from "styled-components";

export const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;

  h2 {
    font-size: 3rem;
    text-align: center;
    line-height: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
  }
  }
`


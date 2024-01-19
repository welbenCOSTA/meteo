import { styled } from "styled-components";

export const TempContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CurrentTempContainer  = styled.div`
  h2 {
    font-size: 7rem;

    @media screen and (max-width: 768px) {
      font-size: 5rem;
    }
  }

  h3 {
    font-size: 4rem;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`

export const Separator = styled.div`
  width: 0.1rem;
  height: 150px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HighAndLowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const TempDetailsBase = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 7rem;

    p {
      font-size: 1.5rem;
    }
  }
`

export const HighTempContainer = styled(TempDetailsBase)``
export const LowTempContainer = styled(TempDetailsBase)``
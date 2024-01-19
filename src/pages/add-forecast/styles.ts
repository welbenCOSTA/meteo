import { styled } from "styled-components";

export const AddForecastsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 0 1rem 7rem 1rem;

  gap: 2.5rem;

  h2 { 
    text-align: center;
  }

  img {
    width: 7rem;
    height: 7rem;
  }

  form {
    width: 100%;
    max-width: 37.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`
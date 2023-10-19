import styled from "styled-components";

export const AddForecastContainer = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  text-align: center;
  background-color: ${props => props.theme["gray-700"]};
  padding: 1.5rem;
  border-radius: 10px;

  h1 {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    button {
      width: 50%;
    }
  }

`
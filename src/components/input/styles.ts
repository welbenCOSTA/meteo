import { styled } from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  label {
    color: ${props => props.theme.colors.white};
  }

  input {
    width: 100%;
    background-color: ${props => `${props.theme.colors['gray-900']}80`};
    color: ${props => props.theme.colors.white};
    border-radius: 0.375rem;
    padding: 1rem;
    border: none;
  }

  span {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    color: ${props => props.theme.colors['red-300']};
  }
`
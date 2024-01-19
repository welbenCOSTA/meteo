import { styled } from "styled-components";

export const ButtonStyled = styled.button`
    height: 3.625rem;
    border: 0;
    background: ${(props) => props.theme.colors['gray-500']};
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 0.375rem;
    margin-top: 1.5rem;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme.colors['gray-900']};
      transition: background-color 0.2s;
    }
` 
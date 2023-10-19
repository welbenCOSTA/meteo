import { css, styled } from "styled-components";

interface InputContainerProps {
  haserror: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  label {
    color: ${props => props.theme["gray-500"]};
  }
    
  input {
    width: 100%;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    ${props => props.haserror && css`
      border: 1px solid ${props.theme["red-300"]};
    `}
  }

  p {
    color: ${props => props.theme["red-300"]};
  }
`
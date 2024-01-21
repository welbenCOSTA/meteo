import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

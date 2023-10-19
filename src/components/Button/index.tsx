import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonContainer } from './styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children ,...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>{children}</ButtonContainer>
  )
}

import { InputHTMLAttributes } from 'react'

import {  InputContainer } from './styles'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  error?: string
}

export function Input({ label, name = '', error, ...rest }: InputProps) {
  const { register } = useFormContext()
  
  return (
    <InputContainer>
      <label>{label && label}</label>
      <input {...rest} {...register(name)} />
      {error && <span>{error}</span>}
    </InputContainer>
  )
}

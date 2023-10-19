import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer } from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  registerName: string
  error?: string
}

export function Input({ label, registerName, id, error, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer haserror={!!error}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...register(registerName)} {...rest} />
      {!!error && <p>{error}</p>}
    </InputContainer>
  )
}

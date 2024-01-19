import logo from '@/assets/logo.svg'
import { LogoContainer } from './styled'

export function Logo() {
  return (
    <LogoContainer>
      <img src={`${logo}`} alt="icone com bordas pretas de uma nuvem com um sol e nuvem cobre uma parte do sol" />
      <h1>METEO</h1>
    </LogoContainer>
  )
}

import { styled } from "styled-components";
import background from '@/assets/background-meteo.jpeg'

export const LayoutConainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`
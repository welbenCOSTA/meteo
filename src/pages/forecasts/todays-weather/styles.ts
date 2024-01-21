import { styled } from 'styled-components';

export const TodaysWeatherContainer = styled.div`
  margin-top: 2.5rem;

  h3 {
    font-size: 1.5rem;
  }
`;

export const WeatherList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  width: calc(100% - 0.5rem);
  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const WeatherCard = styled.li`
  width: 5rem;
  height: auto;
  background-color: ${(props) => `${props.theme.colors['gray-900']}70`};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 0.375rem;

  p,
  span {
    font-size: 1.2rem;
  }
`;

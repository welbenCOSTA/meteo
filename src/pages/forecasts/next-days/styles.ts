import { styled } from "styled-components";

export const NextDaysContainer = styled.div`
  margin-top: 2.5rem;

  h3 {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NextDaysList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  height: calc(100vh - 35rem);
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
      display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`

export const NextDaysCard = styled.li`
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: ${props => `${props.theme.colors['gray-900']}70`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
  }

  & + li {
    margin-top: 1rem;
  }
`
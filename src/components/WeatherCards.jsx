import styled from 'styled-components'

export default function WeatherCard({ apiData, city, isLoaded }) {
  if (isLoaded === true) {
    return (
      <WeatherContainer>
        <City></City>
        <Sky>{apiData.description}</Sky>
        <Temperature>{apiData.temperature}</Temperature>
        <Wind>{apiData.wind}</Wind>
      </WeatherContainer>
    )
  }
  return <></>
}

const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1.5fr 1.8fr 1.2fr;
  gap: 23px 50px;
  grid-auto-flow: row;
  grid-template-areas:
    'Temperature Sky'
    'Temperature wind'
    'Temperature City';
  padding: 2em;
`

const City = styled.div`
  font-weight: 300;
  grid-area: City;
`

const Sky = styled.div`
  font-weight: 300;
  grid-area: Sky;
`

const Temperature = styled.div`
  font-family: Roboto;
  font-size: 3rem;
  font-weight: 500;
  grid-area: Temperature;
`

const Wind = styled.div`
  font-weight: 300;
  grid-area: wind;
`

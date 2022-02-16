import styled from 'styled-components'
import { TailSpin } from 'react-loader-spinner'

export default function WeatherCard({ apiData, isLoaded }) {
  if (isLoaded === true) {
    return (
      <WeatherContainer>
        <Sky>
          <svg xmlns='http://www.w3.org/2000/svg' width='30%' viewBox='0 0 431.656 431.656' fill='white'>
            <path d='M355.652 157.428c-3.2-1.2-6-4-7.2-7.6-18.4-54-68.8-90-125.2-90-72.8 0-132 59.2-132 132 0 2.4 0 5.2.4 8 0 1.2-.4 2.4-1.2 3.6-.8.8-1.6 1.2-2.4 1.2h-4c-23.2 0-44.4 9.2-60.4 25.6-16 16.4-24.4 38.4-23.6 61.2.8 44.4 39.2 80.4 85.2 80.4h234c61.2 0 111.6-48.4 112.4-108.4.4-48.4-30-90.8-76-106zm-36.4 198.4h-234c-37.2 0-68.4-29.2-69.6-65.2-.8-18.4 6-36 18.8-49.6 12.8-13.6 30.4-20.8 49.2-20.8h3.6c5.6.4 10.8-1.6 14.4-5.6 4-4 6.4-10 6-16v-.8c-.4-2-.4-4-.4-6 0-64 52-116 116-116 49.6 0 94 31.6 110 78.8 2.8 8.8 9.2 15.2 17.6 18 39.2 12.8 65.2 49.2 64.8 90.8-.8 50.8-44 92.4-96.4 92.4z' />
            <path d='M149.652 171.828c-4.4-.8-8.4 2-9.6 6.4-.8 4.8-.8 9.2-.8 13.6s3.6 8 8 8 8-3.6 8-8c0-3.6 0-7.2.8-10.4.8-4.4-2-8.4-6.4-9.6zM249.652 112.228c-9.2-2.8-18-4.4-26.4-4.4-25.2 0-48.8 11.2-65.2 30.8-2.8 3.6-2.4 8.4 1.2 11.2 1.6 1.2 3.2 1.6 5.2 1.6 2.4 0 4.8-1.2 6.4-2.8 12.8-16 32-25.2 52.4-25.2 6.8 0 14 1.2 21.6 3.6 4.4 1.2 8.8-1.2 10-5.2 1.2-4-.8-8.4-5.2-9.6z' />
          </svg>{' '}
          {apiData.weather[0].description}
        </Sky>
        <Temperature>{apiData.main.temp ? Math.round(apiData.main.temp) + '°C' : <TailSpin color='#00BFFF' height={40} width={40} />}</Temperature>
        <Wind>
          <svg xmlns='http://www.w3.org/2000/svg' width='30%' viewBox='0 0 512 512' xmlSpace='preserve' fill='white'>
            <path d='M437.313 189.201c-7.88-83.684-78.535-149.379-164.246-149.379S116.702 105.518 108.82 189.201c-42.422 7.72-74.687 44.94-74.687 89.555h34.133c0-31.369 25.52-56.889 56.889-56.889h17.067V204.8c0-72.148 58.697-130.844 130.844-130.844S403.911 132.652 403.911 204.8v17.067h17.067c31.369 0 56.889 25.52 56.889 56.889s-25.52 56.889-56.889 56.889h-85.333v34.133h85.333c50.19 0 91.022-40.833 91.022-91.022 0-44.615-32.265-81.835-74.687-89.555zM204.8 347.022H0v34.133h204.8c15.684 0 28.444 12.76 28.444 28.444s-12.76 28.444-28.444 28.444-28.444-12.76-28.444-28.444h-34.133c0 34.505 28.072 62.578 62.578 62.578s62.578-28.072 62.578-62.578c-.001-34.504-28.074-62.577-62.579-62.577z' />
            <path d='M273.067 210.489c-34.505 0-62.578 28.072-62.578 62.578h34.133c0-15.684 12.76-28.444 28.444-28.444s28.444 12.76 28.444 28.444-12.76 28.444-28.444 28.444H0v34.133h273.067c34.505 0 62.578-28.072 62.578-62.578-.001-34.505-28.073-62.577-62.578-62.577z' />
          </svg>
          {apiData.wind.speed} m/s
        </Wind>
      </WeatherContainer>
    )
  }
  return <></>
}

const Sky = styled.div`
  font-weight: 300;
  grid-area: Sky;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

const Temperature = styled.div`
  font-family: Roboto;
  font-size: 3.5rem;
  font-weight: 500;
  grid-area: Temperature;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const WeatherContainer = styled.div`
  color: #ffffff;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1.5fr 1fr 1.2fr;
  gap: 23px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    'Temperature Sky'
    'Temperature wind'
    'Temperature City';
  justify-content: space-evenly;
  padding: 1em;
`

const Wind = styled.div`
  font-weight: 300;
  grid-area: wind;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

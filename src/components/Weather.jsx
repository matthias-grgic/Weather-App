import styled from 'styled-components'
import FetchFromApi from './lib/fetchApi'
import { useState } from 'react'
import WeatherCard from './WeatherCards'
import LottieAnimation from './LottieAnimation'

export default function Welcome() {
  const [apiData, setApiData] = useState({})
  const [city, setCity] = useState('')
  const [showCard, setShowCard] = useState(false)

  const handleInput = (event) => {
    event.preventDefault()
    setCity(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    FetchFromApi(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=02cb0fe60f679472c69a3e7d2dbd06b7`, setApiData).then(() => setShowCard(true))
  }

  return (
    <Wrapper>
      <LottieAnimation />
      <Form onSubmit={submitHandler}>
        <input type='text' onChange={handleInput} value={city} />
      </Form>
      <WeatherCard apiData={apiData} city={city} isLoaded={showCard} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1em 1em 1em;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input[type='text'] {
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    box-shadow: 0;
    border: 1px solid palevioletred;
    border-radius: 4px;
    display: inline-block;
    margin: 0 0 25px 0;
    padding: 12px 20px;
  }
`

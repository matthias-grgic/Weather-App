import styled from 'styled-components'
import FetchFromApi from '../lib/fetchApi'
import { useState } from 'react'

export default function Welcome() {
  const [apiData, setApiData] = useState([])
  const [city, setCity] = useState('')

  const handleInput = (event) => {
    setCity(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    FetchFromApi(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02cb0fe60f679472c69a3e7d2dbd06b7`, setApiData)
  }

  console.log(apiData)
  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <input type='text' onChange={handleInput} value={city} />
      </Form>
      <Text>City: {apiData.name}</Text>
      <Text>Temp: {apiData.main.temp}</Text>
      <Text>Humidity: {apiData.main.humidity}</Text>
      <Text>Weather: {apiData.weather[0].description}</Text>
      <Text>Wind-Speed: {apiData.wind.speed}</Text>
    </Wrapper>
  )
}

const Text = styled.div`
  color: palevioletred;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4em;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input[type='text'],
  select,
  textarea {
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
    box-shadow: 0;
    border: 1px solid #f0c2c2;
    border-radius: 4px;
    display: inline-block;
    margin: 0 0 25px 0;
    padding: 12px 20px;
  }
  textarea {
    height: 80px;
    resize: none;
  }
`

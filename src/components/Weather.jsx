import styled from 'styled-components'
import FetchFromApi from './lib/fetchApi'
import { useState } from 'react'
import WeatherCard from './WeatherCards'

export default function Welcome() {
  const [apiData, setApiData] = useState([])
  const [city, setCity] = useState('')
  const [showCard, setShowCard] = useState(false)
  const [cityPhoto, setCityPhoto] = useState([])

  const handleInput = (event) => {
    event.preventDefault()
    setCity(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    FetchFromApi(`https://goweather.herokuapp.com/weather/${city}`, setApiData)
    FetchFromApi(`https://imsea.herokuapp.com/api/1?q=Frankfurt`, setCityPhoto)
    setShowCard(true)
  }

  console.log(cityPhoto)

  return (
    <Wrapper>
      <SvgStyled xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' xmlSpace='preserve'>
        <path
          fill='#f7b239'
          d='M438.358 129.146c0 15.156-2.604 29.676-7.409 43.187-16.891-23.653-76.829 31.643-108.125 31.643-16.658 0-56.408-27.084-69.945-19.429-20.13-33.433-66.059 9.715-46.63-50.516 2.661-8.247-12.71-43.564-20.832-41.737C201.259 38.925 250.689 0 309.213 0c71.321 0 129.145 57.824 129.145 129.146z'
        />
        <path
          fill='#e09b2d'
          d='M349.168 6.311A129.005 129.005 0 0 0 309.213 0c-58.524 0-107.954 38.925-123.796 92.293a114.932 114.932 0 0 1 25.233-2.785c11.394 0 22.395 1.667 32.788 4.751 15.146-46.493 55.961-81.387 105.73-87.948z'
        />
        <path
          fill='#2197d8'
          d='M448.268 224.677c24.819 1.606 44.469 22.228 44.469 47.461 0 26.27-21.295 47.565-47.565 47.565H93.797c-41.166 0-74.534-33.381-74.534-74.547s33.368-74.547 74.534-74.547c2.293 0 4.547.117 6.775.324 11.995-39.262 44.391-69.599 84.845-78.64a114.932 114.932 0 0 1 25.233-2.785c41.865 0 78.511 22.358 98.64 55.79 13.536-7.655 29.145-12.034 45.803-12.034 31.296 0 58.964 15.415 75.855 39.068 10.584 14.806 16.957 32.837 17.32 52.345z'
        />
        <path
          fill='#178bbf'
          d='M59.423 254.224c0-41.166 33.368-74.547 74.534-74.547 2.293 0 4.547.117 6.775.324 11.995-39.262 44.391-69.599 84.845-78.64a114.932 114.932 0 0 1 25.233-2.785c1.654 0 3.298.048 4.935.117-13.85-5.905-29.088-9.184-45.095-9.184-8.666 0-17.111.959-25.233 2.785-40.454 9.042-72.85 39.378-84.845 78.64a73.107 73.107 0 0 0-6.775-.324c-41.166 0-74.534 33.381-74.534 74.547s33.368 74.547 74.534 74.547h4.512c-23.167-12.645-38.886-37.227-38.886-65.48z'
        />
        <path
          fill='#2197d8'
          d='M155.537 512a9.716 9.716 0 0 1-8.973-5.986L86.331 361.26c-2.061-4.953.284-10.641 5.237-12.702 4.951-2.061 10.641.284 12.702 5.237l60.233 144.755c2.061 4.953-.284 10.641-5.237 12.702a9.685 9.685 0 0 1-3.729.748z'
        />
        <path
          fill='#2ba5f7'
          d='M252.597 512a9.716 9.716 0 0 1-8.973-5.986L183.391 361.26c-2.061-4.953.284-10.641 5.237-12.702 4.951-2.061 10.64.284 12.702 5.237l60.233 144.755c2.061 4.953-.284 10.641-5.238 12.702a9.67 9.67 0 0 1-3.728.748z'
        />
        <path
          fill='#2197d8'
          d='M349.67 512a9.718 9.718 0 0 1-8.974-5.986L280.463 361.26c-2.061-4.953.284-10.641 5.238-12.702 4.951-2.062 10.64.284 12.702 5.237l60.233 144.755c2.061 4.953-.284 10.641-5.238 12.702a9.677 9.677 0 0 1-3.728.748z'
        />
        <path
          fill='#2ba5f7'
          d='M446.73 512a9.718 9.718 0 0 1-8.974-5.986L377.523 361.26c-2.061-4.953.284-10.641 5.238-12.702 4.951-2.062 10.639.284 12.702 5.237l60.233 144.755c2.061 4.953-.284 10.641-5.238 12.702a9.673 9.673 0 0 1-3.728.748z'
        />
      </SvgStyled>
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
  padding: 1em;
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
    border: 1px solid palevioletred;
    border-radius: 4px;
    display: inline-block;
    margin: 0 0 25px 0;
    padding: 12px 20px;
  }
`

const SvgStyled = styled.svg`
  width: 5em;
  margin: 0em 2em 2em 2em;
`

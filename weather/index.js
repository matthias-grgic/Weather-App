import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

const weatherApiKey = process.env.WEATHER_API_KEY

const fetchWeather = async (searchtext) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=metric&appid=${weatherApiKey}`
  try {
    const weatherStream = await fetch(url)
    const weatherJson = await weatherStream.json()
    return weatherJson
  } catch (e) {
    console.error(e)
  }
}

//Test Route
router.get('/weather', (req, res) => {
  res.json({ status: 'Running' })
})

router.get('/:searchtext', async (req, res) => {
  const searchtext = req.params.searchtext
  const data = await fetchWeather(searchtext)
  res.json(data)
})

router.post('/', async (req, res) => {
  const searchtext = req.body.searchtext
  const data = await fetchWeather(searchtext)
  res.json(data)
})

export default router

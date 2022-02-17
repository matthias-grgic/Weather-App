import cors from 'cors'
import express from 'express'
import router from './weather/index.js'
import path from 'path'

const server = express()
server.use(cors())
server.use(express.json())

const Port = process.env.PORT || 4000

const __dirname = process.cwd()

//Test Route
server.get('/test', (req, res) => res.json({ success: 'Hell World!' }))

//Server Routes
server.use('/weather', router)

//For Deployment
server.use(express.static(path.join(__dirname, './client/dist')))

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist', 'index.html'))
})

server.listen(Port, () => console.log(`Server is running on port ${Port}`))

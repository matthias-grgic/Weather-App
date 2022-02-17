import cors from 'cors'
import express from 'express'
import router from './weather/index.js'

const server = express()
server.use(cors())
server.use(express.json())

const Port = process.env.PORT || 4000

//Test Route
server.get('/', (req, res) => res.json({ success: 'Hell World!' }))

//Server Routes
server.use('/weather', router)

server.listen(Port, () => console.log(`Server is running on port ${Port}`))

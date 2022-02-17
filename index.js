import cors from 'cors'
import express from 'express'
import router from './weather/index.js'

// NOT WORKING YET

// const whitelist = ['http://127.0.0.1', 'http://127.0.0.1:5500']
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origim || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   optionsSuccessStatus: 200,
// }

const server = express()
server.use(cors())
server.use(express.json())

const Port = process.env.PORT || 4000

//Test Route
server.get('/', (req, res) => res.json({ success: 'Hell World!' }))

//Server Routes
server.use('/weather', router)

server.listen(Port, () => console.log(`Server is running on port ${Port}`))

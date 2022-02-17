import cors from 'cors'
import express from 'express'
import router from './weather/index.js'
import path from 'path'

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

const __dirname = process.cwd()

const server = express()
server.use(cors())
server.use(express.json())

const Port = process.env.PORT || 4000

//Test Route
server.get('/', (req, res) => res.json({ success: 'Hell World!' }))

//Server Routes
server.use('/weather', router)

//Route
server.use(express.static(path.join(__dirname, './dist')))

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist', 'index.html'))
})

server.listen(Port, () => console.log(`Server is running on port ${Port}`))

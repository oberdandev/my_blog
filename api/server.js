import { prototype } from 'events'
import express from 'express'
const server = express()
const PORT = 3000 || process.env.PORT

server.listen(PORT, (req, res) => {
    console.log('listening on http://localhost:' + PORT)
})
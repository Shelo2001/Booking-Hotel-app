const express = require('express')

const app = express()

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')
const bookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())

app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server running on port ${port}`))
const path = require('path')

// Step 1:
app.use(express.static(path.resolve(__dirname, './client/build')))
// Step 2:
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

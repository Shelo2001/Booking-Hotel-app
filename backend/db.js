const mongoose = require('mongoose')

var mongoURL = 'mongodb://akaki:akaki@cluster0-shard-00-00.3dfwb.mongodb.net:27017,cluster0-shard-00-01.3dfwb.mongodb.net:27017,cluster0-shard-00-02.3dfwb.mongodb.net:27017/booking?replicaSet=atlas-y16t7n-shard-0&ssl=true&authSource=admin'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
  console.log('db connection failed')
})

connection.on('connected', () => {
  console.log('connection succesful')
})

module.exports = mongoose

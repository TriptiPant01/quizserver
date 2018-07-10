const mongoose = require('mongoose')
const express = require('express')
const app = express()
const question = require('./routes/question')
const user = require('./routes/user')

mongoose.connect('mongodb://localhost/quiz')
.then(() => console.log('Connected to mongodb server'))
.catch((e) => console.log('Failed to connect'))

app.use(express.json())
app.use('/api/question', question)
app.use('/api/user', user)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const question = require('./routes/question')
const user = require('./routes/user')

const mongoURI = 'mongodb://localhost/quiz';
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to mongodb server'))
    .catch((e) => console.log('Failed to connect', e))

app.use(express.json())
app.use('/api/question', question)
app.use('/api/user', user)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))

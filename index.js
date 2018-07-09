const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quiz')
.then(() => console.log('Connected to mongodb server'))
.catch((e) => console.log('Failed to connect'))



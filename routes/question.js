const express = require('express')
const router = express.Router()

const  { Question } = require('../models/question')


router.get('/', async(req, res) => {
	const questions = await Question.find().sort('question')
	res.send(questions)
})

router.post('/', async(req, res) => {
	let question = new Question({
		question: req.body.question,
		category: req.body.category,
		answers: req.body.answers		
	})
	question = await question.save()
	res.send(question)
})

module.exports = router
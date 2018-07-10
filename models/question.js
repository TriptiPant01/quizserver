
const mongoose = require('mongoose')

const Question = mongoose.model('Question', new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true
	},
	answers: {
		type: [String], 
	},
	isValid : {
		type: Boolean
	}
}))


exports.Question = Question
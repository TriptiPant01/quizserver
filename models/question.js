
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
	answers: [
		{
			answer: {
				type: String
			},
			valid: {
				type: Boolean
			}
		
		}
	]

}))


exports.Question = Question
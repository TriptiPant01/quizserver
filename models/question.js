import { Schema } from 'mongoose';

const mongoose = require('mongoose')

const Question = mongoose.model('Question', new mongoose.Schema({
	question: {
		type: String,
		required: true,
	},
	type: {

	},
	answers: {
		type: String, 
		required: true
	}
}))


exports.Question = Question
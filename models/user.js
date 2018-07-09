const mongoose = require('mongoose')

const User = mongoose.model('Admin', new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	isAdmin : {
		type: Boolean,
	},
	password: {
		type: String
	}
}))

exports.User = User
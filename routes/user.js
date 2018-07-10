const express = require('express')
const router = express.Router()

const { User } = require('../models/user')

router.get('/', async(req, res) => {
	const user = await User.find().sort('user')
	res.send(user)
})

router.post('/', async(req, res) => {
	let user = new User({
			username: req.body.username,
			isAdmin: req.body.isAdmin,
			password: req.body.password
	})
	user = await user.save()
	res.send(user)
})

module.exports = router
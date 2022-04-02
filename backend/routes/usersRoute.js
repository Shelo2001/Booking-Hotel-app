const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/register', async (req, res) => {
  const newuser = new User({ name: req.body.name, email: req.body.email, password: req.body.password })

  try {
    const user = await newuser.save()
    res.send('User Registered Successfully')
  } catch (error) {
    return res.status(400).json({ error })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email: email, password: password })
    if (user) {
      const temporary = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      }
      res.send(temporary)
    } else {
      return res.status(400).json({ message: 'login failed' })
    }
  } catch (error) {
    return res.status(400).json({ error })
  }
})

router.get('/getallusers', async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (error) {
    return res.status(400).json({ message: error })
  }
})
module.exports = router

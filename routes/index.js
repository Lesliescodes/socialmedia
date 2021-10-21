const { Thoughts, User } = require('../models');
// const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)
require('../../controllers/User-controllers')
router.use((req, res) => {
  res.status(404).send('wrong route')
})

module.exports = router

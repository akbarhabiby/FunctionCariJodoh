const router = require('express').Router()
const Controller = require('../controllers/controller')

router.post('/', Controller.home)

module.exports = router
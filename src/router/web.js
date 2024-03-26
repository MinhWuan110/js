const express = require('express')
const router = express.Router()

const homebage = { geta, getb, getc }= require('../controllers/homebage')

router.get('/', geta)

router.get('/abc', getb)

router.get('/hoidanit',getc)


module.exports = router
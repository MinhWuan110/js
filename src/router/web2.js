const express = require('express')
const router = express.Router()

router.get('/quanlitaikhoan', (req, res) => {
  res.send('da den trang quan lí tài khoản ')
})

router.get('/quanlibinhluan', (req, res) => {
  res.send('<marquee> Quan lí bình luận  </marquee>')

})

router.get('/quanlisanpham', (req, res) => {
  res.render('sample.ejs') 
})


module.exports = router
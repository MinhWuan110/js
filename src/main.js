const express = require('express')
const app = express()

const path = require('path');// tự đồng tìm đường dẫn tới file 
// config static file 
app.use(express.static(path.join(__dirname,'public')))


require('dotenv').config()
const port = process.env.PORT || 6078;



//timepplate thư viện ejs
const configviewengine = require('./config/viewengine');
configviewengine(app);


// tao route 
// import nodule từ router
const webrouter = require('./router/web') 
const webrouter2 = require('./router/web2') 
//khai báo route
app.use('/user',webrouter) // user và admin ở đây là tiền tố  có tác dụng là taoj ra 1 đường dẫn chứa những router trên  muốn theo từng version 
app.use('/admin',webrouter2) // 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
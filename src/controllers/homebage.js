const geta = (req, res) => {
    //process data
    //call back
  res.send('Hello World! lun ca nha nha kkk iiii tttt huhuhuhuhuhuh')
}

const getb = (req, res) => {
  res.send('<marquee> check abc! </marquee>')}

const getc = (req, res) => {
  res.render('sample.ejs') 
}

module.exports={
    geta,
    getb,
    getc
}
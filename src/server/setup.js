import bodyParser from 'body-parser'
var express = require('express');

export default (app) => {
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  app.post('/createBill', (req, res) => {
    console.log(req.body, 'body')





    res.send({bill_id: '234234'})
  })

  app.use(express.static('public'))


  return app
}

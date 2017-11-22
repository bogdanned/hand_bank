import bodyParser from 'body-parser'


export default (app) => {
  app.use(bodyParser.json()) // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  app.use(express.static('public'))

  app.get('/test', (req, res) => {
    res.send('test back')
  })

  return app
}

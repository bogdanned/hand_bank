var express = require('express');
var path = require('path');

const PORT = process.env.PORT || 5000

var app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(PORT, ()=>(console.log('server started')))

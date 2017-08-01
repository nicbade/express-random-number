var express = require('express');

var app = express();
var port = 5000;

app.use(express.static('public'));


app.get('/random',function(req,res){
  function randomNumber(min, max){
          return Math.floor(Math.random() * (1 + max - min) + min);
  }
  res.send();
});

app.listen(port, function(){
  console.log('listening on port ', port);
});

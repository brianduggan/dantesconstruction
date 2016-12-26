var express     = require('express'),
    app         = express(),
    morgan      = require('morgan'),
    bodyParser  = require('body-parser');

require('dotenv').config();
app.set('view engine', 'jade');
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function(req,res){
  res.render(__dirname + '/public/views/index');
});

var port = process.env.PORT || 5000;

app.listen(port, function(req,res){
  console.log('listening on port: ' + port);
})


//

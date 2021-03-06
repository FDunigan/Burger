var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controllers.js');
app.use('/', router);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
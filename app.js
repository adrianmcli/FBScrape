//var app = require('express').createServer();
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.VCAP_APP_PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Process request
app.get('/', function(req, res) {
    res.send('<h1>Welcome to the Collaborative Problem Space</h1><p>The collaborative problem space is currently under construction, please stay tuned!</p><h2>Less Talk, More Do</h2><p>Rather than spending my time reading books, articles, and looking at "motivational porn", I decided to actually start something I feel passionate about.</p><h2>The Idea</h2><p>To give a space for developing ideas and solutions with a problem-focused approach.</p><h2>Practical Purpose for Us</h2><p>1) Learn Node.js back-end programming</p><p>2) Learn Angular.js front-end programming</p><p>3) Resume padder; interviewers are going to be impressed when they hear that you participated in a project which approaches idea generation in a novel way.</p>');
});

// Create server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

//app.listen(process.env.VCAP_APP_PORT || 3000);
//console.log('Listening on port 3000');
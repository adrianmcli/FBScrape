var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

// Configs for all environments 
app.set('port', process.env.VCAP_APP_PORT || 80);
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Configs for development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Route requests
app.get('/', function(req, res) {
	res.render('index.html');
});

// Create server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
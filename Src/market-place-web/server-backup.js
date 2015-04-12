var express = require('express');
var app = express();

app.use(express.compress());

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use('/static', express.static(__dirname + '/static'));

app.use(express.bodyParser());
app.use(express.cookieParser('SecretPhrase'));
app.use(express.session());

/*register controllers*/
var loginController = require('./controllers/Login');
var homeController = require('./controllers/Home');
var registrationController = require('./controllers/Registration');
var errorController = require('./controllers/Error');

/*register actions*/
app.get('/', loginController.restrict, homeController.index);
app.get('/login', loginController.index);
app.get('/login/authenticate', loginController.authenticate);
app.get('/register', registrationController.index);
app.post('/register/user', registrationController.registerUser);

app.use(errorController.index);

app.listen(80);
console.log('Listening on port 80');
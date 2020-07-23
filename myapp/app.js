// express yee
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// translation stuff
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

//for images
app.use(express.static(path.join(__dirname, '/pages/public')))
app.use(express.static(__dirname + '/pages')

// translation stuff
i18next
.use(Backend)
.use(i18nextMiddleware.LanguageDetector)
.init({
  backend: {
    loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
  },
  detection: {
    order: ['querystring', 'cookie'],
    caches: ['cookie']
  },
  fallbackLng: 'en',
  preload: ['en', 'ru']
});

app.use(i18nextMiddleware.handle(i18next));

// routes
app.get('/', function (req, res){
	res.sendFile(__dirname + '/pages/home.html');
});
app.get('/user1-language', function (req, res){
	res.sendFile(__dirname + '/pages/language1.html');
});
app.get('/user2-language', function (req, res){
	res.sendFile(__dirname + '/pages/language2.html');
});
app.get('/choose', function (req, res){
	res.sendFile(__dirname + '/pages/doctorpatient.html');
});
app.get('/patient-portal', function (req, res){
	res.sendFile(__dirname + '/pages/PatientPortal.html');
});
app.get('/doctor-portal', function (req, res){
	res.sendFile(__dirname + '/pages/DoctorPortal.html');
});

// console log message
app.listen(port, () => console.log('Example app listening at http://localhost:3000'))


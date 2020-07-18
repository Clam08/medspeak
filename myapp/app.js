const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res){
	res.sendfile(__dirname + '/pages/doctorpatient.html');
});

app.listen(port, () => console.log('Example app listening at http://localhost:3000'))
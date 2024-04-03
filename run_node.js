var express = require('express');
var app = express();
var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccavutil.js'),
    qs = require('querystring'),
    ccavReqHandler = require('./ccavRequestHandler.js'),
    ccavResHandler = require('./ccavResponseHandler.js');

app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


app.get('/about', function (req, res){
    	res.render('dataFrom.html');
});

app.post('/ccavRequestHandler', function (request, response){
	ccavReqHandler.postReq(request, response);
});


app.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});

app.listen(3001);








// var express = require('express');
// var app = express();
// const bodyParser = require('body-parser');
// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./ccavutil.js'),
//     qs = require('querystring'),
//     ccavReqHandler = require('./ccavRequestHandler.js'),
//     ccavResHandler = require('./ccavResponseHandler.js');

// app.use(express.static('public'));
// app.set('views', __dirname + '/public');
// app.engine('html', require('ejs').renderFile);
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/about', function (req, res){
//     	res.render('dataFrom.html');
// });

// app.post('/ccavRequestHandler', function (request, response){
//     ccavReqHandler.postReq(request, response);
//     // const formData = request;

//     // // Handle the form data as needed
//     // console.log('Form data received:', formData);

//     // // Respond with a success message or redirect the user
//     // response.send('Form data received successfully.');
// });


// app.post('/ccavResponseHandler', function (request, response){
//         ccavResHandler.postRes(request, response);
// });

// app.listen(3002);

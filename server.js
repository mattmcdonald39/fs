// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Get our API routes
const api = require('./src/server/routes/api');

const app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mmcdonald39@gmail.com',
    pass: 'garvinujujik399'
  }
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);
// app.use('/sendmail', api);

app.get('/api', (req, res) => {
  console.log('api works');
  res.send('api works');
});

app.post('/api/sendmail', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Change this to your Angular 2 port number
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', '*');

  let message = `From: ${req.body.email}
${req.body.reason}: ${req.body.comment}`;

  var mailOptions = {
    from: 'The Face Shade <no-reply@thefaceshade.com>',
    to: 'mmcdonald39@gmail.com, mollymmcdonald@aol.com',
    subject: req.body.reason[0].toUpperCase() + req.body.reason.slice(1, req.body.reason.length) + ' - ' + req.body.name,
    text: message
  };

  console.log('server.js');
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error);
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.end();
    }
  });
})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
const express = require('express');
//const router = express.Router();

const sendgrid = (req, res) => {
	res.json({ msg: 'dette funker?' });
};
/*
router.use('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Hello from Express.js! dette er en ektra testsendgrid</h1>');
	res.end();
});

*/
module.exports = sendgrid;

'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();



const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const sendgrid = require('./express/sendgrid');
app.use(bodyParser.json());
const router = express.Router();
app.use(express.json());
/*


require('dotenv').config();
router.use(helmet());
router.use(morgan('combined'));



app.use('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h1>Hello from Express.js testing!</h1>');
	res.end();
});
app.use('/sengrid', sendgrid);
app.use('/api', router);
// path must route to lambda

app.set('trust proxy', 1);

*/
app.get('/', sendgrid);
module.exports = app;

module.exports.handler = serverless(app);

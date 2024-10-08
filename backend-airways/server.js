const express = require('express');
const { connection } = require('./config/config.js');
const router = require('./Router/router.js');
const config = require('dotenv')
const cors = require('cors');

connection()

const app = express();
app.use(express.json());
app.use(cors());
app.use('/',router);
config.env = config();

const port = process.env.PORT || 5002;
app.listen(port, console.log(`Server running on port ${port}`));

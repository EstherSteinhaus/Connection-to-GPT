const express = require("express");
require('dotenv').config();
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({limit: '5000mb', extended: true, parameterLimit: 100000000000}));
app.use("/",router);

app.listen(3000, () => {
    console.log('app running');
});
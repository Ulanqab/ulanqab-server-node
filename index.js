/**
 * Created by JunaYa<ayac3j@gmail.com>
 * Project : ulanqab-serve-node
 * Filename : index.js
 * Date: 18/04/2020
 * Time: 12:22
 **/

import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import db from './src/models/index.js';
import api from './src/route/index.js';

const corsettings = {
    originUrl: 'http://localhost:8080'
}
const server = express();
server.use(cors(corsettings));
// Parse request of content-type - application/json
server.use(bodyparser.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(bodyparser.urlencoded({ extended: true}));

// setting router
server.use('/', api);

// set listening ports for request
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('ulanqab start::: ', port);
});

// connect database
db.databaseConf.sync();
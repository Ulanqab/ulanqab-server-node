import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

const corsettings = {
    originUrl: 'http://localhost:8081'
}
const server = express();
server.use(cors(corsettings));
// Parse request of content-type - application/json
server.use(bodyparser.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(bodyparser.urlencoded({ extended: true}));

server.get('/list/',(req, res) => {
    res.json({
        message: 'welcome ulanqab',
    })
});

// set listening ports for request
const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log('ulanqab start::: ', port);
});

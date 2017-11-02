import config from './config.js';
import express from 'express';
import apiRouter from './api';

const server = express();

//set up ejs as template engine
server.set('view engine', 'ejs');

//render index page for root URL
server.get('/', (req, res) => {
    res.render('index',{
        content: '...'
    });
});


//middleware serve static content
server.use(express.static('public'));

//sets up api router as a middleware
server.use('/api', apiRouter);



server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
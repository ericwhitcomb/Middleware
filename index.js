const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const gatekeeper = require('./gatekeeper');

const server = express();
const PORT = 5000;

// middleware
// 1) built in
// 2) 3rd party library
// 3) custom
server.use(
    express.json(), 
    helmet(), 
    logger('tiny'),
    gatekeeper.checkPass
);

// route handlers
server.get('/', (req, res) => {
    res.json({message: "Welcome my good weasel"});
});

server.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
// Dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handle_req_res');
const environment = require('./helpers/environment');

// app object - module scaffolding

const app = {};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(environment.port, () => {
        console.log(`Listing to port ${environment.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();

// Dependencies

const http = require('http');
const { handleReqRes } = require('./helpers/handle_req_res');

// app object - module scaffolding

const app = {};

// config
app.config = {
    port: 3000,
};

// create server

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`Listing to port ${app.config.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();

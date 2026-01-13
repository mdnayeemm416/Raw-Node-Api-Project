// dependencies

const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
// app object - module scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
    const parseUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryParms = parseUrl.query;
    const headerObject = req.headers;

    const decoder = new StringDecoder();
    const requestProperties = {
        parseUrl,
        path,
        trimedPath,
        method,
        queryParms,
        headerObject,
    };

    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : routes.notFound;

    chosenHandler(requestProperties, (statuscode, payload) => {
        let statusCode = statuscode;
        let payLoad = payload;
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payLoad = typeof payLoad === 'object' ? payLoad : {};

        const payLoadString = JSON.stringify(payLoad);

        // return the final response
        res.writeHead(statusCode);
        res.end(payLoadString);
    });

    // body
    let bodyData = '';
    req.on('data', (buffer) => {
        bodyData += decoder.write(buffer);
    });

    req.on('end', () => {
        bodyData += decoder.end();
        console.log(bodyData);
        console.log(queryParms);
        res.end('Hello Programmers , how are you ');
    });
};

module.exports = handler;

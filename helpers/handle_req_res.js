// dependencies

const { StringDecoder } = require('string_decoder');
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

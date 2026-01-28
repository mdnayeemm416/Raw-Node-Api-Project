// module scafolding

const handler = {};

handler.notFoundHandler = (requestProperties, callBack) => {
    console.log('RequestProperties', requestProperties.trimedPath);
    callBack(404, {
        message: 'Not Found',
        statusCode: 404,
    });
};

module.exports = handler;

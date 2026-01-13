// module scafolding

const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
    callBack(200, {
        message: 'Suceesss',
        statusCode: 200,
    });
};

module.exports = handler;

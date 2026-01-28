// module scafolding

const handler = {};

handler.sampleHandler = (requestProperties, callBack) => {
    callBack(200, {
        message: 'Suceesss',
        statusCode: 200,
    });
};

handler.aboutHandler = (requestProperties, callBack) => {
    callBack(200, {
        message: 'Success',
        statusCode: 200,
        data: {
            aboutOurself: '',
        },
    });
};

module.exports = handler;

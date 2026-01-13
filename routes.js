// dependencies
const { sampleHandler } = require('./handlers/routeshandler/sample_handler');
const { notFoundHandler } = require('./handlers/routeshandler/not_found_handler');

const routes = {
    sample: sampleHandler,
    notFound: notFoundHandler,
};

module.exports = routes;

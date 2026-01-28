// dependencies
const handler = require('./handlers/routeshandler/handler');
const { notFoundHandler } = require('./handlers/routeshandler/not_found_handler');

const routes = {
    sample: handler.sampleHandler,
    notFound: notFoundHandler,
    about: handler.aboutHandler,
};

module.exports = routes;

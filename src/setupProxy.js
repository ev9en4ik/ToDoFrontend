const {createProxyMiddleware} = require('http-proxy-middleware');

const context = [
    "/api",
];
module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://192.168.0.101:7000',
        secure: false
    });

    app.use(appProxy);
};
require('ts-node').register({ projectSearchDir: __dirname, project: 'tsconfig.json' });
///const proxyGrabber = require('./dist/traffic-generator/packages/proxy-grabber/src/index');
module.exports = require('./src/index').default;

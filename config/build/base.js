// Config modules
const webpack = require('webpack');
const config = require('../../webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

// Config variables
const devLog = require('./dev-server.js');


const PORT = config.devServer.port;
const COLOR = '#9ef51b';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, config.devServer);

server.start().then(() => {
  // pass
});

compiler.hooks.beforeCompile.tap('BeforeCompilePlugin', (d) => {
  devLog(PORT, COLOR);
});

process.on('SIGINT', () => {
  server.stop().then(() => {
    // pass
    server.close();
    process.exit(0);
  });
});

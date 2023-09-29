// Modules
const ip = require('ip');
const chalk = require('chalk');
// Config modules
const webpack = require('webpack');
const config = require('../../webpack.config.js');
// Config variables
const compiler = webpack(config);

const text = (str, color) => chalk.bold(chalk.hex(color)(str));

function devLog(port, color) {
  const isDev = config.mode === 'development';

  console.clear();
  if (isDev) {
    const project_path = compiler.options.context;
    const split_path = project_path.split('/');
    const project = [ ...split_path.slice(0, - 1), chalk.bold(split_path.at(-1)) ].join('/');

    console.log(text('  Project path:           ', color), chalk.underline(project));
    console.log(text('  Local:                  ', color), chalk.underline(`http://localhost:${chalk.bold(port)}`));
    console.log(text('  On Your Network (IPv4): ', color), chalk.underline(`http://${ip.address()}:${chalk.bold(port)}\n`));
  }
};

module.exports = devLog;

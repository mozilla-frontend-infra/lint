const airbnb = require('@neutrinojs/airbnb-base');
const lint = require('@mozilla-frontend-infra/lint');
const merge = require('deepmerge');

module.exports = (neutrino, options = {}) => {
  neutrino.use(lint, {
    use: [airbnb],
  });

  neutrino.config.module
    .rule('lint')
    .use('eslint')
    .tap(opts => merge(opts, options));
};

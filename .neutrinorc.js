const nodeLint = require('./packages/node-lint');

module.exports = {
  use: [
    nodeLint(),
  ],
};

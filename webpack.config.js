var path = require('path');

module.exports = {
  context: __dirname,
  entry: './entry.js',
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  }
};

var path = require('path');
var fs = require('fs');

function buildEntries() {
  return fs.readdirSync('examples').reduce(function(entries, dir) {
    if (dir === 'build') {
      return entries;
    }
    var isDraft = dir.charAt(0) === '_';
    if (!isDraft && fs.lstatSync(path.join('examples', dir)).isDirectory()) {
      entries[dir] = './examples/'+dir+'/'+'main.jsx';
    }
    return entries;
  }, {});
}

module.exports = {
  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, 'examples', 'build'),
    publicPath: '../build/'
  },

  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'}
    ]
  }
};



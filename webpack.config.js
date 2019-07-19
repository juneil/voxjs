const path = require('path');

module.exports = {
  entry: './src/voxjs.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'built'),
    filename: 'vox.js',
    libraryTarget: 'var',
    library: 'VoxJS'
  },
  performance: {
    hints: false
  }
};

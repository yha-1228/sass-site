const path = require('path');

module.exports = {
  devServer: { contentBase: 'public', publicPath: '/js/', open: true },
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, 'public/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env'] },
          },
        ],
      },
    ],
  },
  target: ['web', 'es5'],
};

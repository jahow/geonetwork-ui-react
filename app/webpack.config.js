const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  mode: 'production',
  entry: {
    app: path.join(APP_DIR, 'index.tsx'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: __dirname,
  },
};

module.exports = config;

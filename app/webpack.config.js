const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

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
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
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
  devServer: {
    contentBase: __dirname,
  },
};

module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader'
            },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: 'asset/inline',
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    }),
  ],
}
// While webpack config is being done here as CJS, it is entirely possible to do this using ESM, just need to set "type": "module" in package.json
// And update the file sytnax to esmodule config style
/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'dnl_periodswebresource.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,  // очищує папку dist перед кожною збіркою
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // Додано підтримку .jsx
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Додано @babel/preset-react
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Додає хеш для уникнення кешування
              outputPath: 'images',        // Зберігає картинки в окрему папку
            },
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'], // Додано підтримку JSX
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // Задає шлях до шаблону HTML
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
    },
    optimization: {
      minimize: !isDevelopment, // Оптимізація в production режимі
    },
  };
};

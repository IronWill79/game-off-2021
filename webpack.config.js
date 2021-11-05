const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  entry: './src/index.ts',
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'public'),
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'ts-loader',
      },
    ],
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    clean: true,
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Game Off 2021',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dev',
        filename: 'assets/app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }]
    },
    postcss: function() {
        return [require('autoprefixer'), require('precss')];
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/index.html'
        }])
    ],
    devtool: 'source-map'
};

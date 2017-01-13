const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        path: './',
        filename: 'dist/app.bundle.js'
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
    }
};

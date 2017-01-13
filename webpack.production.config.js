const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './production',
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
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './index.html'
        }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};

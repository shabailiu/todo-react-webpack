var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }, {
            test: /\.css/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader:  'style!css!less'
        }, {
            test: /\.jpe?g$|\.gif$|\.png$|\.ico$/,
            loader: 'file?name=[name].[ext]'
        }]
    },
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['', '.js']
    }
};

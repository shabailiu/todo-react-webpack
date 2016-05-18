var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
// var db = require('./src/lib/db');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', function(err, result) {
    if (err) {
        return console.log(err);
    }

    // db.config({host: 'localhost:27017', database: 'test'});
    console.log('Listening at http://localhost:3000/');
});

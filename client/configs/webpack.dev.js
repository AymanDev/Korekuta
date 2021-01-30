const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = env =>
    merge(common(env), {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9000,
            disableHostCheck: true,
            historyApiFallback: true,
            hot: true,
        },
    });

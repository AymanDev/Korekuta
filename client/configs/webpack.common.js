const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    const isDevelopment = env.NODE_ENV === 'development';
    console.log('Running in development?', isDevelopment);
    return {
        mode: env.NODE_ENV,
        entry: './src/index.tsx',
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.scss'],
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.min.js?v=[hash:6]',
            publicPath: '/',
        },
        module: {
            rules: [
                { enforce: 'pre', test: /\.(tsx|ts)?$/, loader: 'eslint-loader', exclude: '/node_modules/' },
                {
                    test: /\.(tsx|ts)?$/,
                    use: 'ts-loader',
                },
                {
                    test: /\.module\.less$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: {
                                    localIdentName: '[folder]_[local]_[hash:base64:5]',
                                    exportLocalsConvention: 'camelCase',
                                },
                            },
                        },
                        'less-loader',
                    ],
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                        env.NODE_ENV === 'development'
                                            ? '[folder]_[local]_[hash:base64:5]'
                                            : '[hash:base64:8]',
                                },
                                sourceMap: isDevelopment,
                            },
                        },
                        { loader: 'sass-loader', options: { sourceMap: isDevelopment } },
                    ],
                },
                {
                    test: /\.s([ac])ss$/,
                    exclude: /\.module.(s([ac])ss)$/,
                    use: [
                        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff2?|otf)$/,
                    type: 'asset',
                    generator: {
                        filename: 'static/[hash][ext][query]',
                    },
                },
                {
                    test: /\.(png|jpg|woff|woff2|ico)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new Dotenv(),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].[hash].css',
                chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
            }),
        ],
    };
};

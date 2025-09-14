const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@app': path.resolve(__dirname, 'src/app/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@entities': path.resolve(__dirname, 'src/entities/'),
            '@features': path.resolve(__dirname, 'src/features/'),
            '@shared': path.resolve(__dirname, 'src/shared/'),
            '@assets': path.resolve(__dirname, 'src/shared/assets/'),
        },
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' },
            { test: /\.(woff2?|eot|ttf|otf)$/i, type: 'asset/resource' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new Dotenv(),
    ],
    devServer: {
        static: { directory: path.resolve(__dirname, 'dist') },
        compress: true,
        port: 5001,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
};

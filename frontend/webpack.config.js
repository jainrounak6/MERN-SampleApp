var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        allowedHosts: [
            'all'
        ]
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: process.env.API_URL || 'http://localhost:4000'
        })
    }
};

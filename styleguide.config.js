module.exports = {
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /[.]jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /[.]module[.]css$/,
                    use: [
                        "style-loader",
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true
                            }
                        }
                    ]
                },
                {
                    test: /(?<![.]module)[.]css$/,
                    use: [
                        "style-loader",
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: false
                            }
                        }
                    ]
                },
                {
                    test: /[.](?:ttf|woff|woff2)$/,
                    loader: "file-loader"
                },
            ]
        }
    }
}
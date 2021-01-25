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
                    test: /[.]css$/,
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
                }
            ]
        }
    }
}
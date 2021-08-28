const path = require("path")


module.exports = {
    // Mode: setting this to development preconfigure webpack with some defaults
    mode: "production",

    // Loaders: these allow various non-js filetypes to be imported
    module: {
        rules: [
            {
                test: /[.]css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ],
            },
            {
                test: /[.]js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        },
                    }
                ],
            },
            {
                test: /[.]jsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    },
                }],
            },
            {
                test: /[.]ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"]
                    },
                }],
            },
            {
                test: /[.]tsx$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
                    },
                }],
            },
        ],
    },

    // Resolve: how files should be imported
    resolve: {
        // These extensions should be loaded from the source code
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },

    // Externals: these are the dependencies of the bundle
    externals: {
        "classnames": "commonjs classnames",
        "color": "commonjs color",
        "uuid": "commonjs uuid",
        "react": "commonjs react",
        "react-dom": "commonjs react-dom"
    },

    // Input: this is the source root file
    entry: "./src/index.ts",

    // Output: this is what webpack should build
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bluelib-react.umd.js",
        library: {
            name: "bluelib-react",
            type: "umd",
        },
        // WHY?!
        // https://stackoverflow.com/a/64639975/4334568
        globalObject: 'this',
    },

    // Devtools: display source maps
    // devtool: "inline-source-map",
}
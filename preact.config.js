import SentryCliPlugin from "@sentry/webpack-plugin";
const DefinePlugin = require("webpack/lib/DefinePlugin");
const ProvidePlugin = require("webpack/lib/ProvidePlugin");


export default function (config, env, helpers) {
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react-dom"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["path"] = "path-browserify";

    config.module.rules.push(
        {
            test: /\.nojekyll$/,
            loader: 'file-loader',
            options: {
                name: '.nojekyll'
            }
        }
    );
    config.module.rules.push(
        {
            test: /CNAME$/,
            loader: 'file-loader',
            options: {
                name: 'CNAME'
            }
        }
    );
    config.module.rules.push(
        {
            test: /favicon\.ico$/,
            loader: 'file-loader',
            options: {
                name: 'favicon.ico'
            }
        }
    );

    config.plugins.push(
        new DefinePlugin({"process.env.RELEASE": `"${process.env.npm_package_version}"`})
    );

    config.plugins.push(
        new ProvidePlugin({"process": "process/browser"})
    );

    if(env.production) {
        config.plugins.push(
            new SentryCliPlugin({
                include: './docs',
                ignoreFile: ".gitignore",
                configFile: '.sentryclirc',
                release: process.env.npm_package_version,
            })
        )
    }
};

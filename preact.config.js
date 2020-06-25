const DefinePlugin = require("webpack/lib/DefinePlugin");


export default function (config, env, helpers) {
    config.module.rules[4].include = [env.source(".")];
    config.module.rules[5].exclude = [env.source(".")];

    // noinspection JSUnresolvedVariable
    config.resolve.alias["react"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react-dom"] = "preact/compat";

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

    config.plugins.push(
        new DefinePlugin({"process.env.RELEASE": `"${process.env.npm_package_version}"`})
    );
};
